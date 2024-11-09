import React from "react"
import { Box, Grid } from "@mui/material"
import ArtistCard, { SlimArtist } from "./ArtistCard"

interface ArtistsSectionProps {
  artists: SlimArtist[]
}

const ArtistsSection: React.FC<ArtistsSectionProps> = ({ artists }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={3}>
        {artists.map((artist) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={artist._id}>
            <ArtistCard artist={artist} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ArtistsSection
