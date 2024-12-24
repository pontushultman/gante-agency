import { Box, Button } from "@mui/material"
import { FullScreenBackground } from "../../components/FullScreenBackground"
import { Artists } from "../artists/ArtistsRoute"
import { HomeTitle } from "./components/HomeTitle"
import { useState } from "react"
import { ContactFormDrawer } from "../../components/form/ContactForm"
import { GuiButton } from "../../components/button/GuiButton"
import { Footer } from "../footer/Footer"

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
  return (
    <>
      <FullScreenBackground>
        <HomeTitle />
      </FullScreenBackground>
      <Box width="100%" justifyContent="center" display="flex">
        <Box marginTop={4} maxWidth={1200}>
          <Artists disableBacknavigation />
        </Box>
      </Box>
      <Box width="100%" display="flex" justifyContent="center">
        <Footer />
      </Box>
    </>
  )
}
