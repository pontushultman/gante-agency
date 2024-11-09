import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppNavigation } from "./AppNavigation"

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppNavigation />
      </QueryClientProvider>
    </>
  )
}

export default App
