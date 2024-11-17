import { Box, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { GuiChip } from "../../../components/chip/GuiChip"
import { DetailPageTitle } from "../../../components/detail-page/DetailPageTitle"
import { DetailPageWrapper } from "../../../components/detail-page/DetailPageWrapper"
import { FullScreenBackground } from "../../../components/FullScreenBackground"
import { urlFor } from "../../../sanity/image"
import { useArtistByIdQuery } from "../../../sanity/useClient"

export const artistDetailPath = "/artists/:id"

export const ArtistDetailPage = () => {
  const id = useParams<{ id: string }>().id

  const { data } = useArtistByIdQuery(id)

  if (!data) return null

  const imageUrl = urlFor(data.image).width(2560).height(1440).url()

  const paragraphs = data.bio?.split("\n")

  return (
    <>
      <FullScreenBackground backgroundImage={imageUrl}>
        <DetailPageWrapper>
          <Box display="flex" flexDirection="column" gap={2}>
            <DetailPageTitle subTitle="Family" title={data.name || ""} />
            <GuiChip label={data.artistType?.artistType || ""} />

            <Paragraphs paragraphs={paragraphs} />
          </Box>
        </DetailPageWrapper>
      </FullScreenBackground>
    </>
  )
}

type ParagraphsProps = {
  paragraphs?: string[]
}

export const Paragraphs = ({ paragraphs }: ParagraphsProps) => {
  if (!paragraphs) return null

  return (
    <Box display="flex" flexDirection="column" gap={2}>
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
