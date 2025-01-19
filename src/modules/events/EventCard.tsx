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
    <GuiSectionImage
      imageUrl={imageUrl}
      item={event}
      renderItem={(event) => {
        return (
          <Box display="flex" flexDirection="column" paddingBottom={"110px"}>
            <Box
              display="flex"
              flexDirection="column"
              height="auto"
              width="100%"
              padding={2}
              sx={{
                backgroundColor: "transparent",
                position: "absolute",
                bottom: 0
              }}
            >
              <CardTypography>{event.name}</CardTypography>

              <Box
                gap={2}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center"
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
                <Box display="flex" flexDirection="column" width="50%">
                  <Typography>{event.location}</Typography>
                  <Typography>{toLocaleDateTime(event.date)}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        )
      }}
    />
  )
}
