import { Box, Typography } from "@mui/material"
import { colors } from "../../components/colors"
import { siteInfo } from "../../const"
import { useNavigationContext } from "../../setup/NavigationProvider"
import { artistsPath } from "../artists/ArtistsRoute"
import { eventsPath } from "../events/EventsRoute"
import { eventPackagesPath } from "../event-packages/EventPackagesRoute"
import { useIsSmallDevice } from "../../hooks/useIsSmallDevice"

type MenuPageProps = {
  onHomeClick: () => void
}

export const MenuPage = ({ onHomeClick }: MenuPageProps) => {
  const { navigateTo } = useNavigationContext()

  return (
    <Box
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
    >
      <MenuItem
        label={siteInfo.navigation.home}
        onClick={() => onHomeClick()}
      />
      <MenuItem
        label={siteInfo.navigation.artists}
        onClick={() => navigateTo(artistsPath)}
      />
      <MenuItem
        label={siteInfo.navigation.events}
        onClick={() => navigateTo(eventsPath)}
      />
      <MenuItem
        label={siteInfo.navigation.eventPackages}
        onClick={() => navigateTo(eventPackagesPath)}
      />
    </Box>
  )
}

type MenuItemProps = {
  label: string
  onClick: () => void
}

export const MenuItem = ({ label, onClick }: MenuItemProps) => {
  const isSmallDevice = useIsSmallDevice()

  return (
    <Typography
      variant={isSmallDevice ? "h4" : "h2"}
      fontWeight="bold"
      onClick={onClick}
      sx={{
        cursor: "pointer",
        "&:hover": {
          color: colors.bgColor
        }
      }}
    >
      {label}
    </Typography>
  )
}
