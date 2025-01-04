import { Box, Typography, useMediaQuery, useTheme } from "@mui/material"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppNavigation } from "./AppNavigation"
import { GuiButton } from "./components/button/GuiButton"
import { useNavigationContext } from "./setup/NavigationProvider"
import { GuiThemeProvider } from "./setup/ThemeProvider"
import { Phone } from "@mui/icons-material"

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GuiThemeProvider>
          <AppNavigation />
        </GuiThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default App

export const GetInTouchButtoFixedButton = () => {
  const { navigateTo } = useNavigationContext()
  const theme = useTheme()
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const hidden = window.location.pathname === "/get-in-touch"

  if (hidden) return null

  return (
    <GuiButton
      sx={{ position: "fixed", top: "5%", left: "2rem", zIndex: 1000 }}
      onClick={() => navigateTo("/get-in-touch")}
    >
      <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
        {!isSmallMobile && (
          <Typography fontSize={20} fontWeight="bold">
            Get in touch
          </Typography>
        )}
        <Phone fontSize="large" />
      </Box>
    </GuiButton>
  )
}
