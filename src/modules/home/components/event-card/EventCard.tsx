import backgroundImg from "./pexels-hygor-sakai-1214427-2311713.jpg"
import { Box, styled } from "@mui/material"
import { StyledTypography } from "../HomeTitle"

const StyledBackgroundImage = styled("div")({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  fontFamily: '"Comic Sans MS", cursive, sans-serif',
  fontSize: "1.5em",
  textTransform: "uppercase",
  width: "400px",
  height: "500px",
  filter:
    "brightness(0.7) grayscale(0.5)" /* Adjust values for desired effect */,
  "&:hover": {
    filter: "brightness(1) grayscale(0.2)"
  },
  cursor: "pointer"
})

type EventCardProps = {
  text: string
  onClick: () => void
}

export const EventCard = ({ text, onClick }: EventCardProps) => {
  return (
    <StyledBackgroundImage
      style={{
        backgroundImage: `url(${backgroundImg})`
      }}
    >
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={onClick}
      >
        <StyledTypography fontSize="2.5rem">{text}</StyledTypography>
      </Box>
    </StyledBackgroundImage>
  )
}
