import { ReactNode } from 'react'

import { CssBaseline, useMediaQuery } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'class' },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#47AF2A', light: '#cccccc' },
        secondary: { main: '#DCF6FC', dark: '#E4E7EC' },
        background: { default: '#F5F7F9', paper: '#ffffff' },
        text: { primary: '#5B6581', secondary: '#081526' },
        divider: '#dddddd'
      }
    },
    dark: {
      palette: {
        primary: { main: '#818cf8', light: '#312929' },
        secondary: { main: '#1f434e', dark: '#829cc9' },
        background: { default: '#0f172a', paper: '#172442' },
        text: { primary: '#5B6581', secondary: '#c7c7c7' },
        divider: '#2e4265'
      }
    }
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Inter"',
    button: { textTransform: 'none', fontWeight: 600 },
    subtitle1: {
      fontSize: 18,
      lineHeight: '145%',
      fontWeight: 600
    },
    subtitle2: {
      display: 'flex',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '24px',
      color: '#081526'
    },

    h3: {
      fontWeight: 600,
      fontSize: 24,
      lineHeight: '120%'
    },
    h4: {
      fontWeight: 600,
      fontSize: 20,
      lineHeight: '120%'
    },
    h5: {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 24
    },
    h6: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '145%'
    }
  },
  components: {
    MuiContainer: {
      defaultProps: { disableGutters: true },
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle2: 'span'
        }
      }
    },
    MuiButton: { defaultProps: { disableElevation: true }, styleOverrides: { root: { padding: 0 } } }
  }
})

interface AppThemeProps {
  children: ReactNode
}

export const AppTheme = ({ children }: AppThemeProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
