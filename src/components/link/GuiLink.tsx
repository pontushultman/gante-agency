import { ReactNode } from "react"
import { SubTitle } from "../typography/SubTitle"

type GuiLinkProps = {
  children: ReactNode
}

export const GuiLink = ({ children }: GuiLinkProps) => {
  return (
    <SubTitle
      fontSize="1rem"
      sx={{
        fontWeight: "bold",
        "& a": {
          textDecoration: "none",
          color: "inherit"
        },
        "& a:hover": {
          textDecoration: "underline",
          cursor: "pointer"
        }
      }}
    >
      {children}
    </SubTitle>
  )
}
