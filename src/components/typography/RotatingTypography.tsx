import { Typography, TypographyProps } from "@mui/material"

// const glitchAnim = keyframes`
//   0% {
//     transform: translate(0) rotateX(0deg);
//   }
//   5% {
//     transform: translate(-2px, 2px) rotateX(0deg);
//   }
//   10% {
//     transform: translate(2px, -2px) rotateX(180deg); /* Quick flip */
//   }
//   15% {
//     transform: translate(-1px, 1px) rotateX(0deg);
//   }
//   100% {
//     transform: translate(0) rotateX(0deg); /* Hold position for pause */
//   }
// `

export const RotatingTypography = (props: TypographyProps) => {
  return (
    <Typography
      {...props}
      sx={{
        ...props.sx,
        fontFamily: "Avenir Next Heavy",
        color: "#fff",
        letterSpacing: "-0.07em",
        textTransform: "uppercase",
        fontWeight: "bold",
        "--time-anim": "8s", // Total duration (includes 4s pause)
        "--delay-anim": "0s",
        // animation: `${glitchAnim} var(--time-anim) linear infinite`,
        animationDelay: "calc(var(--delay-anim) + var(--time-anim) * 0.2)"
      }}
    />
  )
}
