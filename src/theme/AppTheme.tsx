import { ReactNode } from 'react'

import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'class' },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#47AF2A' },
        secondary: { main: '#DCF6FC', dark: '#E4E7EC' },
        background: { default: '#F5F7F9', paper: '#ffffff' },
        text: { primary: '#5B6581', secondary: '#081526' }
      }
    },
    dark: {
      palette: {
        primary: { main: '#818cf8' },
        secondary: { main: '#2dd4bf' },
        background: { default: '#0f172a', paper: '#1e293b' }
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
    }
    // MuiButton: { defaultProps: { disableElevation: true } },
    // MuiCard: { defaultProps: { variant: 'outlined' } }
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
