import { Box } from "@mui/material"
import { useState } from "react"
import { GuiButton } from "../../components/button/GuiButton"
import { ContactFormDrawer } from "../../components/form/ContactForm"
import { FullScreenBackground } from "../../components/FullScreenBackground"
import HamburgerMenu from "../menu/HamburgerMenu"
import { MenuPage } from "../menu/MenuPage"
import { HomeTitle } from "./components/HomeTitle"

export const homePath = "*"

export const GetInTouchButtoFixedButton = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <ContactFormDrawer onClose={() => setOpen(false)} open={open} />

      <GuiButton
        sx={{ position: "fixed", top: "5%", left: "2rem" }}
        onClick={() => setOpen(true)}
      >
        Contact us
      </GuiButton>
    </>
  )
}

export const HomeRoute = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Box display="flex" flexDirection="column" rowGap={2}>
      {/* <GetInTouchButtoFixedButton /> */}
      <HamburgerMenu
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        open={isMenuOpen}
      />

      <>
        {!isMenuOpen ? (
          <>
            <FullScreenBackground>
              <HomeTitle />
            </FullScreenBackground>
          </>
        ) : (
          <MenuPage onHomeClick={() => setIsMenuOpen(false)} />
        )}
      </>
    </Box>
  )
}
