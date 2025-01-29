import { Box, Typography, TypographyProps } from "@mui/material"

type NoContentProps = {
  text: string
  variant: TypographyProps["variant"]
}

export const NoContent = ({ text, variant }: NoContentProps) => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant={variant}>{text}</Typography>
    </Box>
  )
}
