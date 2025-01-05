import { ThemeProvider, createTheme, useTheme } from "@mui/material"
import React, { useMemo } from "react"
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
        fontFamily: "Avenir Next, sans-serif"
      }
    })
  }, [theme])

  return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>
}
