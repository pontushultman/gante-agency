import styled from "styled-components"

import backgroundImg from "./gante-home.jpeg"

const StyledBackgroundImage = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 1.5em;
  text-transform: uppercase;
  height: 100vh;
  width: 100%;
`

type HomeBackgroundProps = {
  children: React.ReactNode
}

export const HomeBackground = ({ children }: HomeBackgroundProps) => {
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
