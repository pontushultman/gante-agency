import { Box } from "@mui/material"
import { useState } from "react"
import { GuiButton } from "../../components/button/GuiButton"
import { ContactFormDrawer } from "../../components/form/ContactForm"
import { FullScreenBackground } from "../../components/FullScreenBackground"
import { Artists } from "../artists/ArtistsRoute"
import { Footer } from "../footer/Footer"
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
  return (
    <Box display="flex" flexDirection="column" rowGap={2}>
      <FullScreenBackground>
        <HomeTitle />
      </FullScreenBackground>

      <Artists disableBacknavigation />

      <Box width="100%" display="flex" justifyContent="center">
        <Footer />
      </Box>
    </Box>
  )
}
