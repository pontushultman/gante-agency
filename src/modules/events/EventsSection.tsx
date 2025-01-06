import { Box, Typography } from "@mui/material"
import { GuiSection } from "../../components/section/GuiSection"
import { EventsModel } from "../../sanity/sanityClient"
import { useEventsQuery } from "../../sanity/useClient"
import { EventCard } from "./EventCard"

export const EventsSection = () => {
  const { data, isLoading } = useEventsQuery()

  if (isLoading) return null

  if (data?.length === 0)
    return (
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4">Currently there are no events</Typography>
      </Box>
    )

  return (
    <GuiSection<EventsModel>
      items={data || []}
      renderItem={(item) => <EventCard event={item} />}
    />
  )
}
