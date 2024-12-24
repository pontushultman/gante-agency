import styled from "styled-components"
import backgroundImg from "./pexels-marc-schulte-656598-2952834.jpg"

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

type FullScreenBackgroundProps = {
  backgroundImage?: string
  children: React.ReactNode
}

export const FullScreenBackground = ({
  backgroundImage = backgroundImg,
  children
}: FullScreenBackgroundProps) => {
  return (
    <StyledBackgroundImage
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      {children}
    </StyledBackgroundImage>
  )
}
