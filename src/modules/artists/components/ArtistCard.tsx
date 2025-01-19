import { Box, Chip } from "@mui/material"
import React from "react"
import { CardTypography } from "../../../components/detail-page/CardTypography"
import { GuiSectionImage } from "../../../components/section/GuiSectionImage"
import { Artists, MusicFormat } from "../../../sanity/generated-schema-types"
import { urlFor } from "../../../sanity/image"
import { useNavigationContext } from "../../../setup/NavigationProvider"
import { artistDetailPath } from "../detail/ArtistDetailPage"

export type SlimArtist = Pick<Artists, "name" | "_id" | "image"> & {
  musicFormat: MusicFormat[]
}

interface ArtistCardProps {
  artist: SlimArtist
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  const navigate = useNavigationContext()

  const handleClick = () => {
    navigate.navigateTo(artistDetailPath, { id: artist._id })
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
          <Box paddingBottom={"35px"}>
            <Box
              display="flex"
              flexDirection="column"
              rowGap={3}
              sx={{
                position: "absolute",
                bottom: 0,
                left: 16
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap"
                }}
              >
                {artist.musicFormat?.map((label) => (
                  <Chip
                    key={label.musicFormat}
                    label={label.musicFormat}
                    sx={{
                      backgroundColor: (theme) => theme.palette.secondary.main,
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: "bold",
                      textTransform: "uppercase"
                    }}
                  />
                ))}
              </Box>
              <CardTypography>{artist.name}</CardTypography>
            </Box>
          </Box>
        )
      }}
    />
  )
}

export default ArtistCard
