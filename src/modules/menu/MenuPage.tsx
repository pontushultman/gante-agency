import { Box, Typography } from "@mui/material"
import { useNavigationContext } from "../../setup/NavigationProvider"
import { colors } from "../../components/colors"
import { artistsPath } from "../artists/ArtistsRoute"
import { eventsPath } from "../events/EventsRoute"

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
      <MenuItem label="Home" onClick={() => onHomeClick()} />
      <MenuItem label="Artists" onClick={() => navigateTo(artistsPath)} />
      <MenuItem label="Events" onClick={() => navigateTo(eventsPath)} />
    </Box>
  )
}

type MenuItemProps = {
  label: string
  onClick: () => void
}

export const MenuItem = ({ label, onClick }: MenuItemProps) => {
  return (
    <Typography
      variant="h2"
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
