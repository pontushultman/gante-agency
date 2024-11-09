import { Artists, ArtistType, MusicFormat } from "../generated-schema-types"
import EntitySet from "./EntitySet"

type ArtistModel = Omit<Artists, "musicFormat" | "artistType"> & {
  musicFormat: MusicFormat[]
  artistType: ArtistType
}

class DbContext {
  // Define your entity sets
  artists = new EntitySet<ArtistModel>("artists")
  musicFormats = new EntitySet<MusicFormat>("musicFormat")
  artistTypes = new EntitySet<ArtistType>("artistType")
}

export const dbContext = new DbContext()
