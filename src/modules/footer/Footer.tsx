import { Box } from "@mui/material"
import { SubTitle } from "../../components/typography/SubTitle"
import { ReactNode } from "react"
import { CaptionTypography } from "../../components/typography/CaptionTypography"
import { GuiIconButton } from "../../components/button/GuiIconButton"
import { Map } from "@mui/icons-material"

export const Footer = () => {
  return (
    <Box
      display="flex"
      width="100%"
      padding={2}
      flexDirection="column"
      rowGap={2}
      marginLeft="40%"
    >
      <Box display="flex" flexDirection="row" width="100%">
        <Box display="flex" flexDirection="row" width="50%">
          <Box display="flex" flexDirection="column">
            <CaptionTypography>Gante Agency</CaptionTypography>
            <FooterText>Herrgårdsgatan 10,</FooterText>
            <FooterText>65213 Karlstad</FooterText>
            <FooterLink>
              <a href="mailto:booking@ganteagency.com">
                booking@ganteagency.com
              </a>
            </FooterLink>
            <FooterLink>
              <a href="tel:0725677392">0725677392</a>
            </FooterLink>
          </Box>
        </Box>
      </Box>

      <Box display="flex" flexDirection="row">
        <CaptionTypography>
          COPYRIGHT 2025 | GANTE ANGECY |{" "}
          <GuiIconButton
            size="xs"
            onClick={() =>
              window.open("https://maps.app.goo.gl/1rb8NXKRSrCcgdJ5A")
            }
          >
            <Map
              style={{
                width: 10,
                height: 10
              }}
            />
          </GuiIconButton>
        </CaptionTypography>
      </Box>
    </Box>
  )
}

type FooterTextProps = {
  children: ReactNode
}

const FooterText = ({ children }: FooterTextProps) => {
  return (
    <SubTitle fontSize="1rem" sx={{ fontSize: "bold" }}>
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