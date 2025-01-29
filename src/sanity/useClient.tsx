import { useQuery } from "@tanstack/react-query"
import { sanityDb } from "./sanityClient"

const artistsQueryKey = ["artists"]
const eventsQueryKey = ["events"]
const eventPackagesQueryKey = ["eventPackages"]
const managementQueryKey = ["management"]

export const useEventsQuery = () => {
  return useQuery({
    queryKey: eventsQueryKey,
    queryFn: async () => {
      return await sanityDb.events.ToList()
    }
  })
}

export const useEventPackagesQuery = () => {
  return useQuery({
    queryKey: eventPackagesQueryKey,
    queryFn: async () => {
      return await sanityDb.eventPackages.ToList()
    }
  })
}

export const useManagementQuery = () => {
  return useQuery({
    queryKey: managementQueryKey,
    queryFn: async () => {
      return await sanityDb.management.ToList()
    }
  })
}

export const useArtistsQuery = () => {
  return useQuery({
    queryKey: artistsQueryKey,
    queryFn: async () => {
      return await sanityDb.artists.Include((q) => q.musicFormat, true).ToList()
    }
  })
}

export const useArtistTypesQuery = () => {
  return useQuery({
    queryKey: ["artistTypes"],
    queryFn: async () => {
      return await sanityDb.artistTypes.ToList()
    }
  })
}

export const useMusicFormatsQuery = () => {
  return useQuery({
    queryKey: ["musicFormats"],
    queryFn: async () => {
      return await sanityDb.musicFormats.ToList()
    }
  })
}

export const useArtistByIdQuery = (id: string | undefined) => {
  return useQuery({
    queryKey: ["artist", id],
    retry: false,
    queryFn: async () => {
      if (!id) return null
      return await sanityDb.artists
        .Include((q) => q.musicFormat, true)
        .Include((q) => q.artistType)
        .Where((q) => q._id, "==", id)
        .First()
    }
  })
}
