import { useMediaQuery, useTheme } from "@mui/material"

export const useIsSmallDevice = () => {
  const theme = useTheme()
  const isSmallDevice = useMediaQuery(
    theme.breakpoints.down("sm") || theme.breakpoints.down("xs")
  )

  return isSmallDevice
}
