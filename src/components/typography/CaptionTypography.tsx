import { Typography } from "@mui/material"
import { PropsWithChildren } from "react"

export const CaptionTypography = (props: PropsWithChildren) => {
  return (
    <Typography
      variant="caption"
      sx={{
        fontSize: 12,
        letterSpacing: 2,
        color: "#bbb"
      }}
    >
      {props.children}
    </Typography>
  )
}
