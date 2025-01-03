import React from "react"
import PageTopSection from "../../components/page/PageTopSection"
import ArtistsSection from "./components/ArtistsSection"

export const artistsPath = "artists"

type ArtistsProps = {
  disableBacknavigation?: boolean
}

export const Artists = ({ disableBacknavigation }: ArtistsProps) => {
  return (
    <>
      <PageTopSection
        description="Book our artists for your event"
        subtitle="The family"
        title="DJS & ARTISTS"
        disableBacknavigation={disableBacknavigation}
      />

      <ArtistsSection />
    </>
  )
}

const ArtistsRoute: React.FC = () => {
  return <Artists />
}

export default ArtistsRoute
