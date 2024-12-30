import { Typography } from "@mui/material"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppNavigation } from "./AppNavigation"
import { GuiButton } from "./components/button/GuiButton"
import { useNavigationContext } from "./setup/NavigationProvider"
import { GuiThemeProvider } from "./setup/ThemeProvider"

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

  const hidden = window.location.pathname === "/get-in-touch"

  if (hidden) return null

  return (
    <>
      <GuiButton
        sx={{ position: "fixed", top: "5%", left: "2rem" }}
        onClick={() => navigateTo("/get-in-touch")}
      >
        <Typography fontSize={14} fontWeight="bold">
          Get in touch
        </Typography>
      </GuiButton>
    </>
  )
}
