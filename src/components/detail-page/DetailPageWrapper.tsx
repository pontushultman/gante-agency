import { Box } from "@mui/material"

export const DetailPageWrapper = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <Box
      width="100%"
      height="100%"
      alignItems="center"
      display="flex"
      marginRight="80%"
      marginLeft="20%"
      maxWidth={700}
    >
      {children}
    </Box>
  )
}
