import { Box } from "@mui/material"
import { Connect } from "../../components/connect/Connect"
import { GuiLink } from "../../components/link/GuiLink"
import PageTopSection from "../../components/page/PageTopSection"
import { siteInfo } from "../../const"
import { ManagementSection } from "./ManagementSection"

export const getInTouchPath = "/get-in-touch"

export const GetInTouchRoute = () => {
  const href = `mailto:${siteInfo.contact.mail}`

  return (
    <>
      <PageTopSection
        subtitle={siteInfo.getInTouch.subtitle}
        title={siteInfo.getInTouch.title}
        description={
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            rowGap={2}
          >
            <GuiLink>
              <a href={href}>{siteInfo.contact.mail}</a>
            </GuiLink>
            <Box>
              <Connect
                facebookUrl={siteInfo.contact.facebook}
                instagramUrl={siteInfo.contact.instagram}
                mapUrl={siteInfo.contact.mapUrl}
                mailUrl={siteInfo.contact.mail}
              />
            </Box>
          </Box>
        }
      />

      <ManagementSection />
    </>
  )
}
