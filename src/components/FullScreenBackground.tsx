import styled from "styled-components"

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
  backgroundImage: string
  style?: React.CSSProperties
  children: React.ReactNode
}

export const FullScreenBackground = ({
  backgroundImage,
  style,
  children
}: FullScreenBackgroundProps) => {
  return (
    <StyledBackgroundImage
      style={{
        ...style,
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      {children}
    </StyledBackgroundImage>
  )
}
