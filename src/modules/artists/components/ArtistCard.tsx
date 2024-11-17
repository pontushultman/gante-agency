import { Box, Chip, Typography } from "@mui/material"
import React from "react"
import { Artists, MusicFormat } from "../../../sanity/generated-schema-types"
import { urlFor } from "../../../sanity/image"
import { useNavigationContext } from "../../../setup/NavigationProvider"

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
    <Box
      onClick={handleClick}
      sx={{
        position: "relative",
        cursor: "pointer",
        borderRadius: 2,
        overflow: "hidden",
        "&:hover .overlay": {
          opacity: 0.3
        },
        "&:hover .content": {
          color: "#f00"
        }
      }}
    >
      {imageUrl && (
        <Box
          component="img"
          src={imageUrl}
          alt={artist.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      )}
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
          opacity: 0,
          transition: "opacity 0.3s ease"
        }}
      />
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
          sx={{ display: "flex", gap: 1, flexWrap: "wrap", marginBottom: 1 }}
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
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
          {artist.name}
        </Typography>
      </Box>
    </Box>
  )
}

export default ArtistCard
