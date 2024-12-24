import { Chip } from "@mui/material"

type GuiChipProps = {
  label: string
}

export const GuiChip = ({ label }: GuiChipProps) => {
  return (
    <Chip
      key={label}
      label={label}
      sx={{
        backgroundColor: "#e53935",
        maxWidth: "fit-content",
        maxHeight: 20,
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
        textTransform: "uppercase",
        borderRadius: 0
      }}
    />
  )
}
