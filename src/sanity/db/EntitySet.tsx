// EntitySet.ts
import { SanityDocument } from "sanity-codegen"
import {
  Condition,
  getIncludePathAndType,
  IncludeProxy,
  WhereFn
} from "./utils"
import client from "../sanityClient"

type IncludeFn<T> = (obj: IncludeProxy<T>) => any

interface IncludeOption {
  path: string
  isArray: boolean
}

class EntitySet<T extends SanityDocument> {
  private type: string
  private includes: IncludeOption[]
  private whereClause: string = ""

  constructor(type: string, includes: IncludeOption[] = []) {
    this.type = type
    this.includes = includes
  }

  Include(includeFn: IncludeFn<T>, isArray: boolean = false): EntitySet<T> {
    const { path } = getIncludePathAndType(includeFn)
    // Return a new instance to keep it immutable
    return new EntitySet<T>(this.type, [...this.includes, { path, isArray }])
  }

  // Add a Where method to filter by a specific condition
  Where(
    conditionFn: IncludeFn<T>,
    condition: Condition,
    value: any
  ): EntitySet<T> {
    const { path } = getIncludePathAndType(conditionFn)

    this.whereClause = `&& ${path} ${condition} "${value}"`

    return this
  }
  buildQuery(): string {
    const whereClause = this.whereClause ? `${this.whereClause}` : null
    let baseQuery = whereClause
      ? `*[_type == "${this.type}" ${whereClause}]`
      : `*[_type == "${this.type}"]`

    if (this.includes.length > 0) {
      const projections = this.includes
        .map(({ path, isArray }) => {
          const derefOperator = isArray ? "[] ->" : "->"
          return `"${path}":${path}${derefOperator}`
        })
        .join(", ")

      baseQuery += `{..., ${projections}}`
    }

    return baseQuery
  }

  async ToList(): Promise<T[]> {
    const query = this.buildQuery()
    // @ts-ignore
    return await client.fetch(query)
  }

  async First(): Promise<T | null> {
    const query = this.buildQuery()
    // @ts-ignore
    const result = await client.fetch<T[]>(query)
    return result[0] || null
  }
}

export default EntitySet
