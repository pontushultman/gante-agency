import { Box, Button, Typography } from "@mui/material"
import { GuiSectionImage } from "../../components/section/GuiSectionImage"
import { urlFor } from "../../sanity/image"
import { EventsModel } from "../../sanity/sanityClient"
import { toLocaleDateTime } from "../../utils/dateUtils"
import { siteInfo } from "../../const"

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
          <>
            <Box
              className="content"
              sx={{
                position: "absolute",
                bottom: 60,
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
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  {event.name}
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              height="30px"
              width="100%"
              padding={2}
              alignItems="center"
              sx={{
                backgroundColor: "gray",
                position: "absolute",
                bottom: 0
              }}
            >
              <Box
                className="content"
                gap={1}
                sx={{
                  position: "absolute",
                  bottom: 8,
                  width: "100%",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                {event.ticketLink && (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => window.open(event.ticketLink, "_blank")}
                  >
                    {siteInfo.events.eventCardButtonText}
                  </Button>
                )}
                <Box display="flex" flexDirection="column">
                  <Typography>{event.location}</Typography>
                  <Typography>{toLocaleDateTime(event.date)}</Typography>
                </Box>
              </Box>
            </Box>
          </>
        )
      }}
    />
  )
}
