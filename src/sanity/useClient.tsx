import { useQuery } from "@tanstack/react-query"
import { dbContext } from "./sanityClient"

const assetsQueryKey = ["assets"]

export const useAssetsQuery = () => {
  return useQuery({
    queryKey: assetsQueryKey,
    queryFn: async () => {
      return await dbContext.artists
        .Include((q) => q.musicFormat, true)
        .ToList()
    }
  })
}
