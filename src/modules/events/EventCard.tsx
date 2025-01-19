import { Box, Button, Typography } from "@mui/material"
import { CardTypography } from "../../components/detail-page/CardTypography"
import { GuiSectionImage } from "../../components/section/GuiSectionImage"
import { siteInfo } from "../../const"
import { urlFor } from "../../sanity/image"
import { EventsModel } from "../../sanity/sanityClient"
import { toLocaleDateTime } from "../../utils/dateUtils"

type EventCardProps = {
  event: EventsModel
}

export const EventCard = ({ event }: EventCardProps) => {
  const imageUrl = event.image
    ? urlFor(event.image).width(400).height(400).url()
    : null

  return (
    <Box>
      <GuiSectionImage
        imageUrl={imageUrl}
        item={event}
        renderItem={(event) => {
          return (
            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                left: 16
              }}
            >
              {event.ticketLink && (
                <Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => window.open(event.ticketLink, "_blank")}
                  >
                    {siteInfo.events.eventCardButtonText}
                  </Button>
                </Box>
              )}
            </Box>
          )
        }}
      />
      <Box display="flex" flex={1} flexDirection="column" gap={1} pl={2}>
        <CardTypography>{event.name}</CardTypography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center"
          }}
        >
          <Box display="flex" flexDirection="column" width="100%">
            <Typography>{event.location}</Typography>
            <Typography>{toLocaleDateTime(event.date)}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
