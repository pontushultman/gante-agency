import { Box, Grid } from "@mui/material"
import { motion } from "framer-motion"
import { useMemo } from "react"
import { AnimationGrid } from "../../../components/grid/AnimationGrid"
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
    <Box sx={{ padding: 4 }} display="flex" flexDirection="column" gap={2}>
      <Grid container spacing={3}>
        {mappedData.map((artist, index) => (
          <AnimationGrid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={artist._id}
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ArtistCard artist={artist} />
          </AnimationGrid>
        ))}
      </Grid>
    </Box>
  )
}

export default ArtistsSection
