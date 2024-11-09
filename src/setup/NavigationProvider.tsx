import { createContext, ReactNode, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UnionPath } from "../modules/Routes"

type NavigationContextProps = {
  navigateTo: (path: UnionPath) => void
  currentPath: string
}

const NavigationContext = createContext<NavigationContextProps | undefined>(
  undefined
)

type NavigationProviderProps = {
  children: ReactNode
}

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const navigate = useNavigate()
  const currentPath = window.location.pathname

  const navigateTo = (path: UnionPath) => {
    navigate(path)
  }

  return (
    <NavigationContext.Provider value={{ navigateTo, currentPath }}>
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigationContext = () => {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error(
      "useNavigationContext must be used within a NavigationProvider"
    )
  }
  return context
}
