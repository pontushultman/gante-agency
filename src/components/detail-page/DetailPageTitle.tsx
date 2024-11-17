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
      <SubTitle fontSize="1.125rem">{subTitle}</SubTitle>

      <RotatingTypography variant="h3">{title}</RotatingTypography>
    </Box>
  )
}
