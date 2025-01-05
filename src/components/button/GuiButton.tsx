import { Button, ButtonProps } from "@mui/material"
import { colors } from "../colors"

export const GuiButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      sx={{
        ...props.sx,
        borderRadius: "3.75rem",
        border: "2px solid #fff",
        "&:hover": {
          backgroundColor: colors.bgColor,
          borderColor: colors.bgColor
        }
      }}
      variant="outlined"
    >
      {props.children}
    </Button>
  )
}
