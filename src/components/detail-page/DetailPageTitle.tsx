import { Box } from "@mui/material"
import { RotatingTypography } from "../typography/RotatingTypography"
import { SubTitle } from "../typography/SubTitle"

type DetailPageTitleProps = {
  title: string
  subTitle: string
}

export const DetailPageTitle = ({ title, subTitle }: DetailPageTitleProps) => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <SubTitle fontSize="1.3rem">{subTitle}</SubTitle>

      <RotatingTypography variant="h2">{title}</RotatingTypography>
    </Box>
  )
}
