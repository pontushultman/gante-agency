import React from "react"
import { routePrefix } from "../../components/const"
import PageTopSection from "../../components/page/PageTopSection"
import { siteInfo } from "../../const"
import ArtistsSection from "./components/ArtistsSection"

import { Background } from "../../components/assets/Background"

export const artistsPath = `${routePrefix}artists`

type ArtistsProps = {
  disableBacknavigation?: boolean
}

export const Artists = ({ disableBacknavigation }: ArtistsProps) => {
  return (
    <Background>
      <PageTopSection
        description={siteInfo.artists.description}
        subtitle={siteInfo.artists.subtitle}
        title={siteInfo.artists.title}
        disableBacknavigation={disableBacknavigation}
      />

      <ArtistsSection />
    </Background>
  )
}

const ArtistsRoute: React.FC = () => {
  return <Artists />
}

export default ArtistsRoute
