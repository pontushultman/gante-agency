import { ArrowBack, Home } from "@mui/icons-material"
import { Box } from "@mui/material"
import { useNavigationContext } from "../../setup/NavigationProvider"
import { GuiIconButton } from "./GuiIconButton"
import { GuiButton } from "./GuiButton"

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
        padding: "20px 20px",
        width: "100%"
      }}
    >
      {onBackNavigation && (
        <GuiButton onClick={onBackNavigation}>
          <ArrowBack fontSize="large" />
        </GuiButton>
      )}

      {!onBackNavigation && (
        <GuiButton onClick={() => navigate.navigateTo("*")}>
          <Home fontSize="large" />
        </GuiButton>
      )}
    </Box>
  )
}
