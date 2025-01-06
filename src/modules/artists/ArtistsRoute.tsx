import React from "react"
import PageTopSection from "../../components/page/PageTopSection"
import ArtistsSection from "./components/ArtistsSection"
import { routePrefix } from "../../components/const"
import { siteInfo } from "../../const"

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
