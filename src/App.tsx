import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppNavigation } from "./AppNavigation"
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
