import { Box } from "@mui/material"
import { CaptionTypography } from "../../components/typography/CaptionTypography"

export const Footer = () => {
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
