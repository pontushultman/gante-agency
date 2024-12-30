import MenuIcon from "@mui/icons-material/Menu"
import { Box } from "@mui/material"
import { GuiButton } from "../../components/button/GuiButton"

type HamburgerMenuProps = {
  open: boolean
  onClick: () => void
}

const HamburgerMenu = ({ onClick, open }: HamburgerMenuProps) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "5%",
        right: "2rem",
        zIndex: 1000
      }}
    >
      <GuiButton
        onClick={() => {
          onClick()
        }}
        aria-controls={open ? "hamburger-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <MenuIcon fontSize="large" />
      </GuiButton>
    </Box>
  )
}

export default HamburgerMenu
