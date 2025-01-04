import { Box, Typography } from "@mui/material"
import { HomeNavigationButton } from "../button/HomeNavigationButton"
import { CaptionTypography } from "../typography/CaptionTypography"
import { ReactNode } from "react"

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
          overflow: "hidden",
          paddingTop: 2
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
    </>
  )
}

export default PageTopSection
