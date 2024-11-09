export type ArtistDto = {
    _id: string
    name: string
    bio: string
    imageUrl?: string // Optional since image might not always be present
  }