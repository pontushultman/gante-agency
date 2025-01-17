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
      marginRight="90%"
      marginLeft="10%"
    >
      {children}
    </Box>
  )
}
