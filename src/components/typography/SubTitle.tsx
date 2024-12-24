import { SxProps, Typography } from "@mui/material"

type SubTitleProps = {
  children: React.ReactNode
  fontSize: string
  sx?: SxProps
}

export const SubTitle = ({ children, fontSize, sx }: SubTitleProps) => {
  return (
    <Typography
      fontSize={fontSize}
      fontFamily="Avenir Next Medium"
      color="white"
      letterSpacing="0.25em"
      sx={sx}
    >
      {children}
    </Typography>
  )
}
