import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./modules/Routes"
import { NavigationProvider } from "./setup/NavigationProvider"

export const AppNavigation = () => {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </NavigationProvider>
    </BrowserRouter>
  )
}
