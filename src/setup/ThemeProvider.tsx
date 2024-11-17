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
      typography: {
        ...theme.typography,
        fontFamily: "Avenir Next, sans-serif"
      }
    })
  }, [theme])

  return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>
}
