import { FC, ReactNode, useContext, useMemo } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'

import { ChosenTheme } from './ChosenTheme'
import * as Colors from './constants'

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { theme } = useContext(ChosenTheme)
  const mainTheme = useMemo(() => createThemeHelper(theme), [theme])

  return (
    <MuiThemeProvider theme={mainTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

const createThemeHelper = (theme: 'dark' | 'light') => {
  const isDarkTheme = theme === 'dark'
  return createTheme({
    typography: {
      fontFamily: [
        'Montserrat',
        '"Helvetica Neue"',
        'Helvetica',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(',')
    },
    palette: {
      mode: theme,
      background: {
        default: isDarkTheme ? Colors.DEFAULT_DARK_COLOR : Colors.DEFAULT_COLOR,
        paper: isDarkTheme ? Colors.BRAND_COLOR : Colors.DARK_COLOR
      },
      primary: {
        main: isDarkTheme ? Colors.BRAND_COLOR : Colors.DARK_COLOR,
        contrastText: isDarkTheme ? Colors.DARK_COLOR : Colors.BRAND_COLOR,
        dark: Colors.DARK_COLOR,
        light: Colors.BRAND_COLOR
      },
      secondary: {
        main: isDarkTheme ? Colors.DARK_COLOR : Colors.BACKGROUND_COLOR,
        contrastText: isDarkTheme ? Colors.BACKGROUND_COLOR : Colors.DARK_COLOR
      },
      error: {
        main: Colors.CANCEL_BACKGROUND_COLOR,
        contrastText: Colors.BUTTON_COLOR,
        light: Colors.CANCEL_HOVER_COLOR
      },
      success: {
        main: Colors.SUCCESS_BACKGROUND_COLOR,
        contrastText: Colors.BUTTON_COLOR,
        light: Colors.SUCCESS_HOVER_COLOR
      }
    }
  })
}
