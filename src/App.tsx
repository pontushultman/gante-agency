import { People } from "@mui/icons-material"
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppNavigation } from "./AppNavigation"
import { GuiButton } from "./components/button/GuiButton"
import { useNavigationContext } from "./setup/NavigationProvider"
import { GuiThemeProvider } from "./setup/ThemeProvider"
import { siteInfo } from "./const"

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
  const below830px = useMediaQuery("(max-width: 830px)")

  const hidden = window.location.pathname === "/get-in-touch"

  if (hidden) return null

  return (
    <GuiButton
      sx={{ position: "fixed", top: "5%", left: "2rem", zIndex: 1000 }}
      onClick={() => navigateTo("/get-in-touch")}
    >
      <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
        {!below830px && (
          <Typography fontSize={20} fontWeight="bold">
            {siteInfo.getInTouch.buttonText}
          </Typography>
        )}
        <People fontSize="large" />
      </Box>
    </GuiButton>
  )
}
