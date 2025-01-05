import { IconButton } from "@mui/material"
import { colors } from "../colors"

type GuiIconButtonProps = {
  onClick?: () => void
  url?: string
  children: React.ReactNode
  size?: "small" | "medium" | "large" | "xs"
}

export const getSize = (size: "small" | "medium" | "large" | "xs") => {
  switch (size) {
    case "xs":
      return 10
    case "small":
      return 30
    case "medium":
      return 40
    case "large":
      return 50
    default:
      return 40
  }
}

export const GuiIconButton = ({
  onClick,
  children,
  size
}: GuiIconButtonProps) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        marginLeft: "auto",
        marginRight: "auto",
        color: "#fff",
        border: "2px solid #fff",
        borderRadius: "50%",
        width: getSize(size || "medium"),
        height: getSize(size || "medium"),
        "&:hover": {
          backgroundColor: colors.bgColor,
          border: colors.bgColor
        }
      }}
    >
      {children}
    </IconButton>
  )
}
