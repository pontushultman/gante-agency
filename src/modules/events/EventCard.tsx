import { Box, Typography } from "@mui/material"
import { GuiSectionImage } from "../../components/section/GuiSectionImage"
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
      onClick={() => window.open(event.ticketLink, "_blank")}
      renderItem={(event) => {
        return (
          <>
            <Box
              className="content"
              sx={{
                position: "absolute",
                top: 16,
                left: 16,
                color: "#fff"
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Get tickets now
              </Typography>
            </Box>
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
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  {event.description} {toLocaleDateTime(event.date)}
                </Typography>
              </Box>
            </Box>
          </>
        )
      }}
    />
  )
}
