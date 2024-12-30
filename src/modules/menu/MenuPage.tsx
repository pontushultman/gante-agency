import { Box, Typography } from "@mui/material"
import { useNavigationContext } from "../../setup/NavigationProvider"

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
      <MenuItem label="Artists" onClick={() => navigateTo("artists")} />
      <MenuItem label="Events" onClick={() => navigateTo("events")} />
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
          color: "red"
        }
      }}
    >
      {label}
    </Typography>
  )
}
