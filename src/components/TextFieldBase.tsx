import { TextField, TextFieldProps } from "@mui/material"

export const TextFieldBase = (props: TextFieldProps) => {
  return (
    <TextField
      {...props}
      variant="filled"
      sx={{
        ...props.sx,
        "& .MuiFilledInput-root": {
          backgroundColor: "black", // Background for filled variant
          borderRadius: "20px",
          border: "2px solid white",
          "&:hover": {
            borderColor: "red",
            backgroundColor: "red",
            "::before, ::after": {
              borderBottom: "none"
            }
          },
          "::before, ::after": {
            borderBottom: "none"
          }
        },
        "& .MuiInputLabel-root": {
          padding: 0,
          color: "white" // Label color
        }
      }}
    />
  )
}
