import { ArrowBack, Home } from "@mui/icons-material"
import { Box } from "@mui/material"
import { useNavigationContext } from "../../setup/NavigationProvider"
import { GuiIconButton } from "./GuiIconButton"

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
        padding: "20px 20px"
      }}
    >
      {onBackNavigation && (
        <GuiIconButton onClick={onBackNavigation}>
          <ArrowBack />
        </GuiIconButton>
      )}

      {!onBackNavigation && (
        <GuiIconButton onClick={() => navigate.navigateTo("*")}>
          <Home />
        </GuiIconButton>
      )}
    </Box>
  )
}
