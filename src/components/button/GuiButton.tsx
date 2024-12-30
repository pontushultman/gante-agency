import { Button, ButtonProps } from "@mui/material"

export const GuiButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      sx={{
        ...props.sx,
        borderRadius: "3.75rem",
        "&:hover": {
          backgroundColor: "red",
          borderColor: "red",
          color: "#000"
        }
      }}
      variant="outlined"
    >
      {props.children}
    </Button>
  )
}
