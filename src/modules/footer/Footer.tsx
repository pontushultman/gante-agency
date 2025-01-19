import { Box, SxProps, Theme } from "@mui/material"
import { CaptionTypography } from "../../components/typography/CaptionTypography"

type FooterProps = {
  sx?: SxProps<Theme>
}

export const Footer = ({ sx }: FooterProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      padding={2}
      margin="0 auto"
      height={"5%"}
      rowGap={2}
      sx={sx}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <CaptionTypography>COPYRIGHT 2025 | GANTE AGENCY</CaptionTypography>
      </Box>
    </Box>
  )
}
