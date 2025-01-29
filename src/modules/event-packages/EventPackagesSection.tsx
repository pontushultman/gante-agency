import { Box, Chip, Typography } from "@mui/material"
import { GuiSection } from "../../components/section/GuiSection"
import { useEventPackagesQuery } from "../../sanity/useClient"

import { CardTypography } from "../../components/detail-page/CardTypography"
import { NoContent } from "../../components/NoContent"
import { GuiSectionImage } from "../../components/section/GuiSectionImage"
import { useIsSmallDevice } from "../../hooks/useIsSmallDevice"
import { EventPackage } from "../../sanity/generated-schema-types"
import { urlFor } from "../../sanity/image"
import { Paragraphs } from "../artists/detail/ArtistDetailPage"

export const EventPackagesSection = () => {
  const { data, isLoading } = useEventPackagesQuery()
  const isSmallDevice = useIsSmallDevice()

  const variant = isSmallDevice ? "h5" : "h4"

  if (isLoading) return null

  if (data?.length === 0)
    return <NoContent text="Currently there are no events" variant={variant} />

  return (
    <Box minHeight="100vh" width="100%" justifyContent="center">
      <Box>
        <Typography pl={4} textTransform="none" variant={variant}>
          Våra helhetskoncept
        </Typography>
        <GuiSection<EventPackage>
          lg={12}
          md={12}
          xs={12}
          sm={12}
          items={data || []}
          renderItem={(item) => <EventPackageCard eventPackage={item} />}
        />
      </Box>
    </Box>
  )
}

type EventPackageCardProps = {
  eventPackage: EventPackage
}

const EventPackageCard = ({ eventPackage }: EventPackageCardProps) => {
  const imageUrl = eventPackage.image
    ? urlFor(eventPackage.image).width(1000).height(1200).url()
    : null

  const paragraphs = eventPackage.information?.split("\n")

  return (
    <Box display="flex" flexDirection="column" width="100%" maxWidth={600}>
      <GuiSectionImage
        imageUrl={imageUrl}
        item={eventPackage}
        sx={{
          maxWidth: 600
        }}
        renderItem={(eventPackage) => {
          return (
            <Box width="100%" height="100%">
              <Box
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: 16,
                  width: "100%"
                }}
              >
                <Chip
                  label={`${eventPackage.price}`}
                  sx={{
                    backgroundColor: (theme) => theme.palette.secondary.main,
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    mr: 4
                  }}
                />
              </Box>
            </Box>
          )
        }}
      />
      <Box pl={2} pt={2} display="flex" flexDirection="column" gap={2}>
        <CardTypography>{eventPackage.name}</CardTypography>
        <Paragraphs paragraphs={paragraphs} lineHeight="1em" />
      </Box>
    </Box>
  )
}
