import { BackHand, Home } from "@mui/icons-material"
import MenuIcon from "@mui/icons-material/Menu"
import { Box, IconButton, Typography } from "@mui/material"
import { useNavigationContext } from "../../setup/NavigationProvider"

type PageTopSectionProps = {
  logoSrc?: string
  onMenuClick: () => void
  title: string
  subtitle: string
  description: string
}

export const PageTopSection = ({
  logoSrc,
  onMenuClick,
  title,
  subtitle,
  description
}: PageTopSectionProps) => {
  const navigate = useNavigationContext()

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >
        {/* <Box
          component="img"
          src={logoSrc}
          alt="Logo"
          sx={{ width: 40, height: 40 }}
        /> */}
        <IconButton
          onClick={() => navigate.navigateTo("*")}
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            color: "#fff",
            border: "2px solid #fff",
            borderRadius: "50%",
            width: 40,
            height: 40,
            "&:hover": {
              backgroundColor: "#fff",
              color: "#000"
            }
          }}
        >
          <Home />
        </IconButton>
      </Box>

      <Box sx={{ maxWidth: 600, margin: "0 auto" }}>
        <Typography
          variant="caption"
          sx={{
            fontSize: 12,
            letterSpacing: 2,
            color: "#bbb",
            marginBottom: "10px"
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontSize: 48, fontWeight: "bold", lineHeight: 1.2, margin: 0 }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: 16, color: "#bbb", marginTop: "20px" }}
        >
          {description}
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: 200,
          background: "url(/path/to/waves.svg) repeat-x bottom",
          bottom: 0,
          left: 0,
          opacity: 0.1
        }}
      />
    </Box>
  )
}

export default PageTopSection
