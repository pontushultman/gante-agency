import { ReactNode } from "react"
import backgroundImg from "./background.png"
import { FullScreenBackground } from "../FullScreenBackground"

type BackgroundProps = {
  children: ReactNode
}

export const Background = ({ children }: BackgroundProps) => {
  return (
    <FullScreenBackground backgroundImage={backgroundImg}>
      {children}
    </FullScreenBackground>
  )
}
