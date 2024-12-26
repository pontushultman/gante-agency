import { Box } from "@mui/material"
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
      <Box
        display="flex"
        width="100%"
        sx={{
          backgroundColor: "black"
        }}
      >
        <ArtistsSection />
      </Box>
    </>
  )
}

const ArtistsRoute: React.FC = () => {
  return <Artists />
}

export default ArtistsRoute
