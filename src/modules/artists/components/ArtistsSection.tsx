import { Box, Grid } from "@mui/material"
import { useMemo, useState } from "react"
import { useArtistsQuery } from "../../../sanity/useClient"
import ArtistCard, { SlimArtist } from "./ArtistCard"

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
      {/* <Box display="flex" flexDirection="row" gap={2}>
        <TextFieldBase
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box> */}

      <Grid container spacing={3}>
        {mappedData.map((artist) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={artist._id}>
            <ArtistCard artist={artist} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ArtistsSection
