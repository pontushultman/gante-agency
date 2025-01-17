import { Box, Typography } from "@mui/material"
import { GuiSection } from "../../components/section/GuiSection"
import { Management } from "../../sanity/generated-schema-types"
import { urlFor } from "../../sanity/image"
import { useManagementQuery } from "../../sanity/useClient"
import { CaptionTypography } from "../../components/typography/CaptionTypography"

export const ManagementSection = () => {
  const { data, isLoading } = useManagementQuery()

  const sortByGabrielFirst = (a: Management, b: Management) => {
    if (a.name?.includes("Gabriel")) return -1
    if (b.name?.includes("Gabriel")) return 1
    return 0
  }

  const sortedData = data?.sort(sortByGabrielFirst)

  if (isLoading) return null

  return (
    <GuiSection<Management>
      items={sortedData || []}
      xs={12}
      lg={12}
      md={12}
      sm={12}
      renderItem={(item) => <ManagementCard management={item} />}
    />
  )
}

type ManagementCardProps = {
  management: Management
}

const ManagementCard = ({ management }: ManagementCardProps) => {
  const url = management.image
    ? urlFor(management.image).width(600).height(600).url()
    : null

  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={1}
      justifyContent="center"
      alignItems="center"
    >
      {url && (
        <Box
          component="img"
          src={url}
          alt={management.name || "image"}
          sx={{
            borderRadius: "50%",
            width: "150px",
            height: "150px"
          }}
        />
      )}
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        rowGap={1}
        textAlign="center"
      >
        <Typography fontWeight="bold" variant="h6" textTransform="uppercase">
          {management.name}
        </Typography>
        <CaptionTypography>{management.role}</CaptionTypography>
        {management.phone && (
          <CaptionTypography>{management.phone}</CaptionTypography>
        )}
        {management.mail && (
          <CaptionTypography>{management.mail}</CaptionTypography>
        )}
      </Box>
    </Box>
  )
}
