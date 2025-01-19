import { routePrefix } from "../../components/const"
import PageTopSection from "../../components/page/PageTopSection"
import { siteInfo } from "../../const"
import { EventsSection } from "./EventsSection"

export const eventsPath = `${routePrefix}events`

export const EventsRoute = () => {
  return (
    <>
      <PageTopSection
        description={siteInfo.events.description}
        subtitle={siteInfo.events.subtitle}
        title={siteInfo.events.title}
      />
      <EventsSection />
    </>
  )
}
