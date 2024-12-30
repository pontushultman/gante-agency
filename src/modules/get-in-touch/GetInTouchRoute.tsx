import { Box } from "@mui/material"
import { Connect } from "../../components/connect/Connect"
import { GuiLink } from "../../components/link/GuiLink"
import PageTopSection from "../../components/page/PageTopSection"
import { ManagementSection } from "./ManagementSection"

export const getInTouchPath = "/get-in-touch"

export const GetInTouchRoute = () => {
  return (
    <>
      <PageTopSection subtitle="Get in touch with" title="Gante Agency" />

      <ManagementSection />

      <Box display="flex" flexDirection="column" alignItems="center" rowGap={2}>
        <GuiLink>
          <a href="mailto:booking@ganteagency.com">booking@ganteagency.com</a>
        </GuiLink>
        <Box>
          <Connect
            facebookUrl="https://www.facebook.com/gabriel.hammarsten"
            instagramUrl="https://www.instagram.com/gante_agency/"
            mapUrl="https://maps.app.goo.gl/1rb8NXKRSrCcgdJ5A"
            mailUrl="booking@ganteagency.com"
          />
        </Box>
      </Box>
    </>
  )
}
