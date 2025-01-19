import { Box } from "@mui/material"
import { Background } from "../../components/assets/Background"
import { routePrefix } from "../../components/const"
import PageTopSection from "../../components/page/PageTopSection"
import { siteInfo } from "../../const"
import { EventsSection } from "./EventsSection"

export const eventsPath = `${routePrefix}events`

export const EventsRoute = () => {
  return (
    <Background>
      <Box height="100%">
        <PageTopSection
          description={siteInfo.events.description}
          subtitle={siteInfo.events.subtitle}
          title={siteInfo.events.title}
        />
        <EventsSection />
      </Box>
    </Background>
  )
}
