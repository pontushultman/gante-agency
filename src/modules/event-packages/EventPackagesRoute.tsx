import { routePrefix } from "../../components/const"
import PageTopSection from "../../components/page/PageTopSection"
import { siteInfo } from "../../const"
import { EventPackagesSection } from "./EventPackagesSection"

export const eventPackagesPath = `${routePrefix}event-packages`

export const EventPackagesRoute = () => {
  return (
    <>
      <PageTopSection
        description={siteInfo.eventsPackages.description}
        subtitle={siteInfo.eventsPackages.subtitle}
        title={siteInfo.eventsPackages.title}
      />
      <EventPackagesSection />
    </>
  )
}
