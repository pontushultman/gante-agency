import { createClient } from "@sanity/client"
import EntitySet from "./db/EntitySet"
import { Artists, ArtistType, MusicFormat } from "./generated-schema-types"

const client = createClient({
  projectId: "x200fdmv",
  dataset: "production",
  apiVersion: "2024-11-05",
  useCdn: true
  //   token:
  //     "skoor70QVuvf0hqCQNXsJE3x2uTs9Zim80MeHNQqEK0mShL1lQBBAiWntDSVajpZ1FgRGgBkynWMnOhhnD77HBmE0JbgJIbOsAiHUzeGnxzE8KzN5Luy34YdNCWsJZ0GGEIIVeFtKTW7Lhh2B7javJ6t4ZlSD4oDKqdNncfF0Tgxy0RWP0Xi"
})

type ArtistModel = Omit<Artists, "musicFormat" | "artistType"> & {
  musicFormat: MusicFormat[]
  artistType: ArtistType
}

class SanityDb {
  // Define your entity sets
  artists = new EntitySet<ArtistModel>("artists")
  musicFormats = new EntitySet<MusicFormat>("musicFormat")
  artistTypes = new EntitySet<ArtistType>("artistType")
}

export const sanityDb = new SanityDb()

export default client
