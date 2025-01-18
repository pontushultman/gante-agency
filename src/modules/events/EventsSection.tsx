import { Box, Typography } from "@mui/material"
import { GuiSection } from "../../components/section/GuiSection"
import { EventsModel } from "../../sanity/sanityClient"
import { useEventsQuery } from "../../sanity/useClient"
import { EventCard } from "./EventCard"
import { useMemo } from "react"

export const EventsSection = () => {
  const { data, isLoading } = useEventsQuery()

  const { upcomingEvents, pastEvents } = useMemo(() => {
    if (!data) return { upcomingEvents: [], pastEvents: [] }

    return getUpcomingAndPastEvents(data)
  }, [data])

  console.log(pastEvents)

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
    <Box>
      <Box>
        <Typography pl={4} textTransform="none" variant="h4">
          Kommande events
        </Typography>
        <GuiSection<EventsModel>
          items={upcomingEvents || []}
          renderItem={(item) => <EventCard event={item} />}
        />
      </Box>
      <Box>
        <Typography pl={4} variant="h4" textTransform="none">
          Tidigare events
        </Typography>
        <GuiSection<EventsModel>
          items={pastEvents || []}
          renderItem={(item) => <EventCard event={item} />}
        />
      </Box>
    </Box>
  )
}

const getUpcomingAndPastEvents = (events: EventsModel[]) => {
  const now = new Date()
  const upcomingEvents = events

    .filter((event) => {
      if (!event.date) return false

      const eventDate = new Date(event.date)
      return eventDate >= now
    })
    .sort((a, b) => {
      if (!a.date || !b.date) return 0

      if (a.date > b.date) return 1
      if (a.date < b.date) return -1
      return 0
    })

  const pastEvents = events
    .filter((event) => {
      if (!event.date) return false

      const eventDate = new Date(event.date)
      return eventDate < now
    })
    .sort((a, b) => {
      if (!a.date || !b.date) return 0

      if (a.date > b.date) return -1
      if (a.date < b.date) return 1
      return 0
    })

  return { upcomingEvents, pastEvents }
}
