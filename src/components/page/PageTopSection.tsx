import { Box, Typography, useMediaQuery, useTheme } from "@mui/material"
import { ReactNode } from "react"
import { homePath } from "../../modules/home/HomeRoute"
import { BackNavigationButton } from "../button/BackNavigationButton"
import { CaptionTypography } from "../typography/CaptionTypography"

type PageTopSectionProps = {
  title: string
  subtitle: string
  description?: string | ReactNode
  disableBacknavigation?: boolean
}

export const PageTopSection = ({
  title,
  subtitle,
  description,
  disableBacknavigation
}: PageTopSectionProps) => {
  const theme = useTheme()

  const isMobileDevice = useMediaQuery(
    theme.breakpoints.down("sm") || theme.breakpoints.down("xs")
  )

  return (
    <Box pt={isMobileDevice ? 10 : 0} pb={2}>
      {!disableBacknavigation && (
        <BackNavigationButton
          onBackNavigationProps={{
            path: homePath
          }}
        />
      )}

      <Box
        sx={{
          position: "relative",

          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          overflow: "hidden",
          paddingTop: 4
        }}
      >
        <Box>
          <CaptionTypography>{subtitle}</CaptionTypography>
          <Typography
            variant="h1"
            sx={{
              fontSize: 48,
              fontWeight: "bold",
              lineHeight: 1.2,
              margin: 0
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: 16, color: "#bbb", marginTop: "20px" }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default PageTopSection
