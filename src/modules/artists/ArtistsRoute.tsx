// src/components/Artists.js
import { Box } from "@mui/material"
import React from "react"
import PageTopSection from "../../components/page/PageTopSection"
import ArtistsSection from "./components/ArtistsSection"

export const artistsPath = "artists"

const ArtistsRoute: React.FC = () => {
  return (
    <>
      <PageTopSection
        description="Book our artists for your event"
        subtitle="The family"
        title="DJS & ARTISTS"
        onMenuClick={() => console.log("Asd")}
      />
      <Box
        paddingBottom={40}
        display="flex"
        sx={{
          backgroundColor: "black"
        }}
      >
        <ArtistsSection />
      </Box>
    </>
  )
}

export default ArtistsRoute
