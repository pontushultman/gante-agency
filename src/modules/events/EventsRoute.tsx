import PageTopSection from "../../components/page/PageTopSection"
import { EventsSection } from "./EventsSection"

export const eventsPath = "events"

export const EventsRoute = () => {
  return (
    <>
      <PageTopSection
        description="Our events can be booked by companies, nightclub owners or festivals. We always tailor the events to your needs and wishes"
        subtitle="UPCOMING EVENTS"
        title="GANTE AGENCY EVENTS"
      />
      <EventsSection />
    </>
  )
}
