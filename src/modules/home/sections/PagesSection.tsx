import { Box } from "@mui/material"
import { EventCard } from "../components/event-card/EventCard"
import { useNavigationContext } from "../../../setup/NavigationProvider"

export const PagesSection = () => {
  const navigation = useNavigationContext()

  return (
    <Box
      width="100%"
      height="auto"
      sx={{
        backgroundColor: "black"
      }}
      justifyContent="center"
      flexDirection="column"
      display="flex"
      paddingTop={8}
      paddingBottom={8}
    >
      <Box
        display="flex"
        flexDirection="row"
        gap={4}
        width="100%"
        justifyContent="center"
      >
        <EventCard text="Event" onClick={() => console.log("asd")} />
        <EventCard
          text="DJs / Artists"
          onClick={() => navigation.navigateTo("artists")}
        />
      </Box>
    </Box>
  )
}
