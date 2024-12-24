import { Box, Typography } from "@mui/material"
import { HomeNavigationButton } from "../button/HomeNavigationButton"
import { CaptionTypography } from "../typography/CaptionTypography"

type PageTopSectionProps = {
  title: string
  subtitle: string
  description: string
  disableBacknavigation?: boolean
}

export const PageTopSection = ({
  title,
  subtitle,
  description,
  disableBacknavigation
}: PageTopSectionProps) => {
  return (
    <>
      {!disableBacknavigation && <HomeNavigationButton />}

      <Box
        sx={{
          position: "relative",
          backgroundColor: "#000",
          color: "#fff",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          overflow: "hidden"
        }}
      >
        <Box sx={{ maxWidth: 600, margin: "0 auto" }}>
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
    </>
  )
}

export default PageTopSection
