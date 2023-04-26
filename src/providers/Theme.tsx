import { FC, useContext, useMemo } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'

import { ChosenTheme } from './ChosenTheme'

export const ThemeProvider: FC<any> = ({ children }) => {
  const { theme } = useContext(ChosenTheme)
  const muiTheme = useMemo(() => createThemeHelper(theme), [theme])

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

const brandColor = 'rgb(255, 227, 0)'
const darkBrandColor = 'rgb(39, 43, 48)'

const textBackgroundColor = 'rgb(245, 245, 245)'

const buttonsTextColor = 'rgb(255,255,255)'

const successMainBackground = 'rgb(76, 175, 80)'
const successHoverColor = 'rgb(67, 160, 71)'

const cancelMainBackground = 'rgb(244, 67, 54)'
const cancelHoverColor = 'rgb(229, 57, 53)'

const createThemeHelper = (theme: 'dark' | 'light') => {
  const isDark = theme === 'dark'
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
        default: isDark ? '#303030' : '#f0f0f0',
        paper: isDark ? brandColor : darkBrandColor
      },
      primary: {
        main: isDark ? brandColor : darkBrandColor,
        contrastText: isDark ? darkBrandColor : brandColor,
        dark: darkBrandColor,
        light: brandColor
      },
      secondary: {
        main: isDark ? darkBrandColor : textBackgroundColor,
        contrastText: isDark ? textBackgroundColor : darkBrandColor
      },
      error: {
        main: cancelMainBackground,
        contrastText: buttonsTextColor,
        light: cancelHoverColor
      },
      success: {
        main: successMainBackground,
        contrastText: buttonsTextColor,
        light: successHoverColor
      }
    }
  })
}
