import { Typography, useMediaQuery } from "@mui/material"

type CardTypographyProps = {
  children: React.ReactNode
}

export const CardTypography = ({ children }: CardTypographyProps) => {
  const isSmallDevice = useMediaQuery("(max-width: 1200px)")

  return (
    <Typography
      variant={isSmallDevice ? "h5" : "h4"}
      sx={{
        fontWeight: "bold"
      }}
    >
      {children}
    </Typography>
  )
}
