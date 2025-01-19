import { Box, keyframes, styled, Typography } from "@mui/material"
import { SubTitle } from "../../../components/typography/SubTitle"
import { Connect } from "../../../components/connect/Connect"
import { siteInfo } from "../../../const"
import { Logo } from "../../../components/assets/Logo"

const glitchAnim = keyframes`
  0% {
    transform: translate(0) rotateX(0deg);
    content: "Gante Agency";
  }
  5% {
    transform: translate(-2px, 2px) rotateX(0deg);
    content: "ycnegA etnaG";
  }
  10% {
    transform: translate(2px, -2px) rotateX(180deg); /* Quick flip */
    contnet: "ycnegA etnaG";
  }
  15% {
    transform: translate(-1px, 1px) rotateX(0deg);
  }
  100% {
    transform: translate(0) rotateX(0deg); /* Hold position for pause */
  }
`
type StyledTypographyProps = {
  fontSize: string
}

export const StyledTypography = styled(Typography)<StyledTypographyProps>(
  ({ theme, fontSize }) => ({
    fontSize,
    color: "#fff",
    lineHeight: "1em",
    letterSpacing: "-0.05em",
    textTransform: "uppercase",
    "--time-anim": "8s", // Total duration (includes 4s pause)
    "--delay-anim": "0s",
    animation: `${glitchAnim} var(--time-anim) linear infinite`,
    animationDelay: "calc(var(--delay-anim) + var(--time-anim) * 0.2)"
  })
)

export const HomeTitle = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      height="91%"
      width="100%"
    >
      <SubTitle fontSize="1.5rem">{siteInfo.home.welcome}</SubTitle>
      <Logo
        sx={{
          maxWidth: "400px",
          height: "auto",
          marginY: -2
        }}
      />
      <Box pt={1}>
        <Connect
          facebookUrl={siteInfo.contact.facebook}
          instagramUrl={siteInfo.contact.instagram}
          mapUrl={siteInfo.contact.mapUrl}
          mailUrl={siteInfo.contact.mail}
        />
      </Box>
    </Box>
  )
}
