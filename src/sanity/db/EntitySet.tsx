// EntitySet.ts
import { SanityDocument } from "sanity-codegen"
import { getIncludePathAndType, IncludeProxy } from "./utils"
import client from "../sanityClient"

type IncludeFn<T> = (obj: IncludeProxy<T>) => any

interface IncludeOption {
  path: string
  isArray: boolean
}

class EntitySet<T extends SanityDocument> {
  private type: string
  private includes: IncludeOption[]

  constructor(type: string, includes: IncludeOption[] = []) {
    this.type = type
    this.includes = includes
  }

  Include(includeFn: IncludeFn<T>, isArray: boolean = false): EntitySet<T> {
    const { path } = getIncludePathAndType(includeFn)
    // Return a new instance to keep it immutable
    return new EntitySet<T>(this.type, [...this.includes, { path, isArray }])
  }

  buildQuery(): string {
    let baseQuery = `*[_type == "${this.type}"]`

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
