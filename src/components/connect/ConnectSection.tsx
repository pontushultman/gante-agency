import { Box } from "@mui/material"
import { Connect, ConnectProps } from "./Connect"
import { SubTitle } from "../typography/SubTitle"

type ConnectSectionProps = {
  title: string
  connectProps: ConnectProps
}

export const ConnectSection = ({
  title,
  connectProps
}: ConnectSectionProps) => {
  return (
    <Box display="flex" flexDirection="column">
      <SubTitle fontSize="0.75rem">{title}</SubTitle>
      <Connect {...connectProps} />
    </Box>
  )
}
