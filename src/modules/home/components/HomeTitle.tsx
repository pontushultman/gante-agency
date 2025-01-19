import { Box, keyframes, styled, Typography } from "@mui/material"
import { colors } from "../../../components/colors"
import { Connect } from "../../../components/connect/Connect"
import { SubTitle } from "../../../components/typography/SubTitle"
import { siteInfo } from "../../../const"
import { FooterText } from "../../footer/Footer"
import { useIsSmallDevice } from "../../../hooks/useIsSmallDevice"

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
  ({ theme, fontSize, color }) => ({
    fontSize,
    color: color || "#fff",
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
  const isSmallDevice = useIsSmallDevice()
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      height="100%"
      width="100%"
    >
      <SubTitle
        sx={{
          color: colors.primary,
          textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
          textTransform: "uppercase"
        }}
        fontSize="1.5rem"
      >
        {siteInfo.home.welcome}
      </SubTitle>
      <Typography
        marginY={-2}
        fontSize={isSmallDevice ? "3.5rem" : "5rem"}
        fontWeight="bold"
        textTransform="uppercase"
        sx={{
          textStroke: "1px gray",
          "-webkit-text-stroke": "1px gray",
          textShadow: "10px 10px 12px rgba(0, 0, 0, 0.5)"
        }}
      >
        Ganté Agency
      </Typography>
      <Box pt={1}>
        <Connect
          facebookUrl={siteInfo.contact.facebook}
          instagramUrl={siteInfo.contact.instagram}
          mapUrl={siteInfo.contact.mapUrl}
          mailUrl={siteInfo.contact.mail}
        />
      </Box>
      <FooterText
        sx={{
          position: "absolute",
          bottom: 0
        }}
      />
    </Box>
  )
}
