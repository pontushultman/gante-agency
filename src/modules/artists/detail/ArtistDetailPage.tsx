import { Box, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { HomeNavigationButton } from "../../../components/button/HomeNavigationButton"
import { GuiChip } from "../../../components/chip/GuiChip"
import { ConnectSection } from "../../../components/connect/ConnectSection"
import { DetailPageImageSlideShow } from "../../../components/detail-page/DetailPageImageSlideShow"
import { DetailPageTitle } from "../../../components/detail-page/DetailPageTitle"
import { DetailPageWrapper } from "../../../components/detail-page/DetailPageWrapper"
import { FullScreenBackground } from "../../../components/FullScreenBackground"
import { urlFor } from "../../../sanity/image"
import { ArtistModel } from "../../../sanity/sanityClient"
import { useArtistByIdQuery } from "../../../sanity/useClient"
import { useNavigationContext } from "../../../setup/NavigationProvider"
import { homePath } from "../../home/HomeRoute"
import { routePrefix } from "../../../components/const"

export const artistDetailPath = `${routePrefix}/artists/:id`

const hasSocialLink = (artist: ArtistModel) => {
  return (
    artist.socialLinks?.facebook ||
    artist.socialLinks?.spotify ||
    artist.socialLinks?.instagram ||
    artist.socialLinks?.youtube
  )
}

export const ArtistDetailPage = () => {
  const navigate = useNavigationContext()

  const id = useParams<{ id: string }>().id

  const { data } = useArtistByIdQuery(id)
  if (!data) return null

  const imageUrl = urlFor(data.image).width(2560).height(1440).url()
  const paragraphs = data.bio?.split("\n")

  return (
    <Box
      sx={{
        backgroundColor: "black",
        height: "100%"
      }}
    >
      <FullScreenBackground backgroundImage={imageUrl}>
        <HomeNavigationButton
          onBackNavigation={() => navigate.navigateTo(homePath)}
        />

        <DetailPageWrapper>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" flexDirection="row" alignItems="center">
              <DetailPageTitle
                subTitle="Vibe creator"
                title={data.name || ""}
              />
            </Box>

            <GuiChip label={data.artistType?.artistType || ""} />

            <Paragraphs paragraphs={paragraphs} />

            {hasSocialLink(data) && (
              <ConnectSection
                title={`Connect with me`}
                connectProps={{
                  facebookUrl: data.socialLinks?.facebook,
                  instagramUrl: data.socialLinks?.instagram,
                  spotifyUrl: data.socialLinks?.spotify,
                  youtubeUrl: data.socialLinks?.youtube
                }}
              />
            )}
          </Box>
        </DetailPageWrapper>
      </FullScreenBackground>

      <DetailPageImageSlideShow images={data.imageGallery || []} />
    </Box>
  )
}

type ParagraphsProps = {
  paragraphs?: string[]
}

export const Paragraphs = ({ paragraphs }: ParagraphsProps) => {
  if (!paragraphs) return null

  return (
    <Box display="flex" flexDirection="column" gap={2} maxWidth="80vw">
      {paragraphs.map((paragraph, index) => (
        <Typography
          color="#bbbbbb"
          fontFamily="Avenir Next Regular"
          fontSize="1.25rem"
          lineHeight="1.5em"
          textTransform="none"
          key={index}
        >
          {paragraph}
        </Typography>
      ))}
    </Box>
  )
}
