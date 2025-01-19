import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GetInTouchButtoFixedButton } from "./App"
import { routes } from "./modules/Routes"
import { NavigationProvider } from "./setup/NavigationProvider"

export const AppNavigation = () => {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <GetInTouchButtoFixedButton />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        {/* {!currentPath.includes(homePath) && <Footer />} */}
      </NavigationProvider>
    </BrowserRouter>
  )
}
