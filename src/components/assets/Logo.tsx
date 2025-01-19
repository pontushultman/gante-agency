import { Box, SxProps, Theme } from "@mui/material"
import logo from "./logo.png"

type LogoProps = {
  sx?: SxProps<Theme>
}

export const Logo = ({ sx }: LogoProps) => {
  return <Box component="img" sx={sx} src={logo} alt="logo" width="100%" />
}
