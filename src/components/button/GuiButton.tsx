import { Button, ButtonProps } from "@mui/material";

export const GuiButton = (props: ButtonProps) => {
    return (
        <Button
        sx={{
            ...props.sx,
             color: "#fff",
            borderRadius: "3.75rem",
            borderColor: "#fff",
            "&:hover": {
            backgroundColor: "#fff",
            color: "#000"
             }
        }}
        variant="outlined"
      >
        {props.children}
      </Button>
    )
}