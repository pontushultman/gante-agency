import { ArrowBack, Home } from "@mui/icons-material"
import { Box } from "@mui/material"
import { useNavigationContext } from "../../setup/NavigationProvider"
import { GuiButton } from "./GuiButton"
import { homePath } from "../../modules/home/HomeRoute"

type HomeNavigationButtonProps = {
  onBackNavigation?: () => void
}

export const HomeNavigationButton = ({
  onBackNavigation
}: HomeNavigationButtonProps) => {
  const navigate = useNavigationContext()

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "20px",
        width: "100%"
      }}
    >
      {onBackNavigation && (
        <GuiButton onClick={onBackNavigation}>
          <ArrowBack fontSize="large" />
        </GuiButton>
      )}

      {!onBackNavigation && (
        <GuiButton onClick={() => navigate.navigateTo(homePath)}>
          <Home fontSize="large" />
        </GuiButton>
      )}
    </Box>
  )
}
