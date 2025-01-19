import { createTheme, ThemeProvider, useTheme } from "@mui/material"
import { useMemo } from "react"
import { colors } from "../components/colors"

export const GuiThemeProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const theme = useTheme()

  const mergedTheme = useMemo(() => {
    return createTheme({
      ...theme,
      palette: {
        ...theme.palette,
        primary: {
          main: "#FFF"
        },
        secondary: {
          main: colors.bgColor
        }
      },
      typography: {
        ...theme.typography,
        allVariants: {
          color: "#FFF"
        },
        fontFamily: "'Fira Sans', 'Helvetica', 'Arial', sans-serif",
        h1: {
          fontWeight: 700,
          fontSize: "4.5rem" // Adjust as needed
        },
        h2: {
          fontWeight: 600,
          fontSize: "3.5rem"
        },
        h3: {
          fontWeight: 600,
          fontSize: "3rem"
        },
        h4: {
          fontWeight: 600,
          fontSize: "2.5rem"
        },

        body1: {
          fontWeight: 400,
          fontSize: "1rem"
        },
        caption: {
          fontWeight: 400,
          fontSize: "0.75rem"
        },
        button: {
          fontWeight: 500,
          fontSize: "0.875rem"
        }
      }
    })
  }, [theme])

  return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>
}
