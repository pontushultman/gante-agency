import { Box, Typography } from "@mui/material"
import { useMemo } from "react"
import { GuiSection } from "../../components/section/GuiSection"
import { useIsSmallDevice } from "../../hooks/useIsSmallDevice"
import { EventsModel } from "../../sanity/sanityClient"
import { useEventsQuery } from "../../sanity/useClient"
import { EventCard } from "./EventCard"

export const EventsSection = () => {
  const { data, isLoading } = useEventsQuery()
  const isSmallDevice = useIsSmallDevice()

  const { upcomingEvents } = useMemo(() => {
    if (!data) return { upcomingEvents: [], pastEvents: [] }

    return getUpcomingAndPastEvents(data)
  }, [data])

  const variant = isSmallDevice ? "h5" : "h4"

  if (isLoading) return null

  return (
    <Box minHeight="100vh">
      <Box>
        <Typography px={2} textTransform="none" variant={variant}>
          {upcomingEvents && upcomingEvents.length > 0
            ? "Kommande events"
            : "Just nu finns det inga kommande events"}
        </Typography>
        <GuiSection<EventsModel>
          items={upcomingEvents || []}
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
