import { Box } from "@mui/material"
import { ReactNode } from "react"
import PageTopSection from "../../components/page/PageTopSection"
import { SubTitle } from "../../components/typography/SubTitle"
import { Connect } from "../../components/connect/Connect"

export const getInTouchPath = "/get-in-touch"

export const GetInTouchRoute = () => {
  return (
    <>
      <PageTopSection subtitle="Get in touch with" title="Gante Agency" />
      <Box display="flex" flexDirection="column" alignItems="center" rowGap={2}>
        <FooterLink>
          <a href="mailto:booking@ganteagency.com">booking@ganteagency.com</a>
        </FooterLink>
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

type FooterTextProps = {
  children: ReactNode
}

const FooterText = ({ children }: FooterTextProps) => {
  return (
    <SubTitle fontSize="1rem" sx={{ fontWeight: "bold" }}>
      {children}
    </SubTitle>
  )
}

const FooterLink = ({ children }: FooterTextProps) => {
  return (
    <SubTitle
      fontSize="1rem"
      sx={{
        fontWeight: "bold",
        "& a": {
          textDecoration: "none",
          color: "inherit"
        },
        "& a:hover": {
          textDecoration: "underline",
          cursor: "pointer"
        }
      }}
    >
      {children}
    </SubTitle>
  )
}
