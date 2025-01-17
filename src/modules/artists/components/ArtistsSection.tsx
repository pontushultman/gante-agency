import { useMemo } from "react"
import { GuiSection } from "../../../components/section/GuiSection"
import { useArtistsQuery } from "../../../sanity/useClient"
import ArtistCard, { SlimArtist } from "./ArtistCard"

const ArtistsSection = () => {
  const { data, isLoading } = useArtistsQuery()

  const mappedData = useMemo(() => {
    if (!data) return []

    return data.reduce<SlimArtist[]>((acc, artist) => {
      const mappedArtist: SlimArtist = {
        _id: artist._id,
        name: artist.name,
        image: artist.image,
        musicFormat: artist.musicFormat
      }

      return [...acc, mappedArtist]
    }, [])
  }, [data])

  if (isLoading) return null

  return (
    <GuiSection<SlimArtist>
      items={mappedData}
      renderItem={(item) => <ArtistCard artist={item} />}
    />
  )
}

export default ArtistsSection
