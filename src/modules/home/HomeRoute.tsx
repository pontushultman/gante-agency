import { Box } from "@mui/material"
import { useState } from "react"
import HamburgerMenu from "../menu/HamburgerMenu"
import { MenuPage } from "../menu/MenuPage"
import { HomeTitle } from "./components/HomeTitle"
import { HomeBackground } from "./HomeBackground"

export const homePath = `/`

export const HomeRoute = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Box display="flex" flexDirection="column" rowGap={2}>
      <HamburgerMenu
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        open={isMenuOpen}
      />

      <>
        {!isMenuOpen ? (
          <>
            <HomeBackground>
              <HomeTitle />
            </HomeBackground>
          </>
        ) : (
          <MenuPage onHomeClick={() => setIsMenuOpen(false)} />
        )}
      </>
    </Box>
  )
}
