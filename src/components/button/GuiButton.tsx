import { Button, ButtonProps } from "@mui/material"

export const GuiButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      sx={{
        ...props.sx,
        borderRadius: "3.75rem",
        border: "2px solid #fff",
        "&:hover": {
          backgroundColor: "red",
          borderColor: "red"
        }
      }}
      variant="outlined"
    >
      {props.children}
    </Button>
  )
}
