import { useEffect, useState } from "react"
import client from "./sanityClient"

type UseSanityClientProps<T> = {
  type: T extends { _type: infer U } ? U : never // Infer the type based on `_type`
  fields: Array<keyof T> // Limit fields to keys of T
  refFields?: Array<keyof T>
  queryParams?: Record<string, unknown>
}

const getRefFields = (fields?: string[]) => {
  if (!fields) return null
  return fields.map((field) => `${field}[] ->`).join(" ")
}

export function useSanityClient<T, X>({
  type,
  fields,
  refFields,
  queryParams
}: UseSanityClientProps<T>) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<X | undefined>(undefined)

  useEffect(() => {
    const fieldSelection = fields.join(", ")

    const refFieldSelection = getRefFields(refFields as string[])

    const finalFields = refFieldSelection
      ? `${fieldSelection}, ${refFieldSelection}`
      : fieldSelection

    const query = `*[_type == "${type}"]{${finalFields}}`

    client
      // @ts-ignore
      .fetch<X>(query, queryParams)
      .then((data: X) => {
        // @ts-ignore
        setData(data)
        setLoading(false)
      })
      .catch(console.error)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return { data, loading }
}
