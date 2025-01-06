import { ArrowBack, Home } from "@mui/icons-material"
import { Box } from "@mui/material"
import { useNavigationContext } from "../../setup/NavigationProvider"
import { GuiButton } from "./GuiButton"
import { homePath } from "../../modules/home/HomeRoute"
import { UnionPath } from "../../modules/Routes"

type BackNavigationButtonProps = {
  onBackNavigationProps?: {
    path: UnionPath
    params?: Record<string, string>
  }
}

export const BackNavigationButton = ({
  onBackNavigationProps
}: BackNavigationButtonProps) => {
  const navigate = useNavigationContext()

  return (
    <Box
      sx={{
        position: "fixed",
        top: "5%",
        right: "2rem",
        zIndex: 1000
      }}
    >
      {onBackNavigationProps && (
        <GuiButton
          onClick={() =>
            navigate.navigateTo(
              onBackNavigationProps.path,
              onBackNavigationProps.params
            )
          }
        >
          <ArrowBack fontSize="large" />
        </GuiButton>
      )}

      {!onBackNavigationProps && (
        <GuiButton onClick={() => navigate.navigateTo(homePath)}>
          <Home fontSize="large" />
        </GuiButton>
      )}
    </Box>
  )
}
