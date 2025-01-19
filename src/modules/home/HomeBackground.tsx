import styled from "styled-components"

import backgroundImg from "./gante-home.jpeg"

const StyledBackgroundImage = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;

  @media (max-width: 768px) {
    background-size: auto 100%;
    background-position: 45% 20%;
  }
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
