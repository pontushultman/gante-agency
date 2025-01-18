import { ReactNode } from "react"
import styled from "styled-components"
import backgroundImg from "./background.png"
type BackgroundProps = {
  children: ReactNode
}

const StyledBackgroundImage = styled.div`
  background-size: auto; /* Change to 'cover' if you want it stretched */
  background-repeat: repeat;
  background-position: center;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 1.5em;
  text-transform: uppercase;
  width: 100vw; /* Full viewport width */
`
export const Background = ({ children }: BackgroundProps) => {
  return (
    <StyledBackgroundImage
      style={{
        backgroundImage: `url(${backgroundImg})`
      }}
    >
      {children}
    </StyledBackgroundImage>
  )
}
