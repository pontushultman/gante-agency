import { Box, Grid } from "@mui/material"
import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { useArtistsQuery } from "../../../sanity/useClient"
import ArtistCard, { SlimArtist } from "./ArtistCard"
import { AnimationGrid } from "../../../components/grid/AnimationGrid"

const ArtistsSection = () => {
  const { data, isLoading } = useArtistsQuery()
  const [search, setSearch] = useState("")

  const mappedData = useMemo(() => {
    if (!data) return []

    return data.reduce<SlimArtist[]>((acc, artist) => {
      const mappedArtist: SlimArtist = {
        _id: artist._id,
        name: artist.name,
        image: artist.image,
        musicFormat: artist.musicFormat
      }

      if (search.length === 0) {
        return [...acc, mappedArtist]
      }

      if (
        artist.name?.toLowerCase().includes(search.toLowerCase()) ||
        artist.musicFormat.some((format) =>
          format.musicFormat?.toLowerCase().includes(search.toLowerCase())
        )
      ) {
        return [...acc, mappedArtist]
      }

      return acc
    }, [])
  }, [data, search])

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
