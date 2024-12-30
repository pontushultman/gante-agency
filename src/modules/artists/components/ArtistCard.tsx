import { Box, Chip, Typography } from "@mui/material"
import React from "react"
import { Artists, MusicFormat } from "../../../sanity/generated-schema-types"
import { urlFor } from "../../../sanity/image"
import { useNavigationContext } from "../../../setup/NavigationProvider"
import { GuiSectionImage } from "../../../components/section/GuiSectionImage"

export type SlimArtist = Pick<Artists, "name" | "_id" | "image"> & {
  musicFormat: MusicFormat[]
}

interface ArtistCardProps {
  artist: SlimArtist
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  const navigate = useNavigationContext()

  const handleClick = () => {
    navigate.navigateTo("/artists/:id", { id: artist._id })
  }

  const imageUrl = artist.image
    ? urlFor(artist.image).width(400).height(400).url()
    : null

  return (
    <GuiSectionImage
      imageUrl={imageUrl}
      item={artist}
      onClick={handleClick}
      renderItem={(artist) => {
        return (
          <Box
            className="content"
            sx={{
              position: "absolute",
              bottom: 16,
              left: 16,
              color: "#fff"
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexWrap: "wrap",
                marginBottom: 1
              }}
            >
              {artist.musicFormat?.map((label) => (
                <Chip
                  key={label.musicFormat}
                  label={label.musicFormat}
                  sx={{
                    backgroundColor: "#e53935",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: "bold",
                    textTransform: "uppercase"
                  }}
                />
              ))}
            </Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              {artist.name}
            </Typography>
          </Box>
        )
      }}
    />
  )
}

export default ArtistCard
