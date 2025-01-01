import { ThemeProvider, createTheme, useTheme } from "@mui/material"
import React, { useMemo } from "react"

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
          main: "#F40000"
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
