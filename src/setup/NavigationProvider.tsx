import { createContext, ReactNode, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UnionPath } from "../modules/Routes"

export type NavigationContextProps = {
  navigateTo: (path: UnionPath, params?: Record<string, string>) => void
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

  const navigateTo = (path: UnionPath, params: Record<string, string> = {}) => {
    // Replace any path variables like ":id" with actual values from params
    const fullPath = Object.keys(params).reduce((acc, key) => {
      return acc.replace(`:${key}`, params[key])
    }, path)

    navigate({
      pathname: fullPath
    })
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
