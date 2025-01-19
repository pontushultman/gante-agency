import { Box } from "@mui/material"
import { useState } from "react"
import { FullScreenBackground } from "../../components/FullScreenBackground"
import { Footer } from "../footer/Footer"
import HamburgerMenu from "../menu/HamburgerMenu"
import { MenuPage } from "../menu/MenuPage"
import { HomeTitle } from "./components/HomeTitle"
import { routePrefix } from "../../components/const"
import { HomeBackground } from "./HomeBackground"

export const homePath = `${routePrefix}`

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
