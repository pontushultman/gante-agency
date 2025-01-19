import { Box, SxProps, Theme, Typography } from "@mui/material"
import logo from "./gante.png"

type LogoProps = {
  sx?: SxProps<Theme>
}

export const Logo = ({ sx }: LogoProps) => {
  return (
    <Box>
      <Box
        component="img"
        sx={sx}
        src={logo}
        alt="logo"
        width="100%"
        paddingY={1}
      />
      <Typography variant="h1" color="primary" textAlign="center">
        Agency
      </Typography>
    </Box>
  )
}
