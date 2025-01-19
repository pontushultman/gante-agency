import React from "react"
import { routePrefix } from "../../components/const"
import PageTopSection from "../../components/page/PageTopSection"
import { siteInfo } from "../../const"
import ArtistsSection from "./components/ArtistsSection"

export const artistsPath = `${routePrefix}artists`

type ArtistsProps = {
  disableBacknavigation?: boolean
}

export const Artists = ({ disableBacknavigation }: ArtistsProps) => {
  return (
    <>
      <PageTopSection
        description={siteInfo.artists.description}
        subtitle={siteInfo.artists.subtitle}
        title={siteInfo.artists.title}
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
