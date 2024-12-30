import { GuiSection } from "../../components/section/GuiSection"
import { EventsModel } from "../../sanity/sanityClient"
import { useEventsQuery } from "../../sanity/useClient"
import { EventCard } from "./EventCard"

export const EventsSection = () => {
  const { data, isLoading } = useEventsQuery()

  if (isLoading) return null

  return (
    <GuiSection<EventsModel>
      items={data || []}
      renderItem={(item) => <EventCard event={item} />}
    />
  )
}
