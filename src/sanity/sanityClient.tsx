import { createClient } from "@sanity/client"
import EntitySet from "./db/EntitySet"
import {
  Artists,
  ArtistType,
  MusicFormat,
  Event,
  Management
} from "./generated-schema-types"

const client = createClient({
  projectId: "x200fdmv",
  dataset: "production",
  apiVersion: "2024-11-05",
  useCdn: true
})

export type ArtistModel = Omit<Artists, "musicFormat" | "artistType"> & {
  musicFormat: MusicFormat[]
  artistType: ArtistType
}

export type EventsModel = Event

class SanityDb {
  // Define your entity sets
  artists = new EntitySet<ArtistModel>("artists")
  musicFormats = new EntitySet<MusicFormat>("musicFormat")
  artistTypes = new EntitySet<ArtistType>("artistType")
  events = new EntitySet<EventsModel>("event")
  management = new EntitySet<Management>("management")
}

export const sanityDb = new SanityDb()

export default client
