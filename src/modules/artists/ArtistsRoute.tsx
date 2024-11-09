// src/components/Artists.js
import React, { useMemo } from "react"
import PageTopSection from "../../components/page/PageTopSection"
import { useAssetsQuery } from "../../sanity/useClient"
import ArtistsSection from "../components/ArtistsSection"

export const artistsPath = "artists"

const ArtistsRoute: React.FC = () => {
  // const { data, loading } = useSanityClient<Artists, Artists[]>({
  //   type: "artists",
  //   fields: ["name", "image", "_id"],
  //   refFields: ["musicFormat"]
  // })

  const { data, isLoading } = useAssetsQuery()

  const mappedData = useMemo(() => {
    return !data
      ? []
      : data.map((artist) => ({
          _id: artist._id,
          name: artist.name,
          image: artist.image,
          musicFormat: artist.musicFormat
        }))
  }, [data])

  console.log(mappedData)

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <PageTopSection
        description="Book our artists for your event"
        subtitle="The family"
        title="DJS & ARTISTS"
        onMenuClick={() => console.log("Asd")}
      />
      <ArtistsSection artists={mappedData} />
    </>
  )
}

export default ArtistsRoute
