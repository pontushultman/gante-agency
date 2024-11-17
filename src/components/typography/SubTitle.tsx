import { Typography } from "@mui/material"

type SubTitleProps = {
  children: React.ReactNode
  fontSize: string
}

export const SubTitle = ({ children, fontSize }: SubTitleProps) => {
  return (
    <Typography
      fontSize={fontSize}
      fontFamily="Avenir Next Medium"
      color="white"
      letterSpacing="0.25em"
    >
      {children}
    </Typography>
  )
}
