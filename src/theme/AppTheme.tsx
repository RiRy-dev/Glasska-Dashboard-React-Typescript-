import { ReactNode } from 'react'

import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

export const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'class' },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#47AF2A', light: '#cccccc' },
        secondary: { main: '#DCF6FC', dark: '#E4E7EC' },
        background: { default: '#F5F7F9', paper: '#ffffff' },
        text: { disabled: '#5B6581', primary: '#081526' },
        common: { background: '#F5F7F9' },
        divider: '#dddddd'
      }
    },
    dark: {
      palette: {
        primary: { main: '#818cf8', light: '#312929' },
        secondary: { main: '#1f434e', dark: '#182132' },
        background: { default: '#090E1C', paper: '#0E1525' },
        text: { disabled: '#ACB0B7', primary: '#ffffff' },
        common: { background: '#2F384D' },
        divider: '#182132'
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
    MuiButton: { defaultProps: { disableElevation: true }, styleOverrides: { root: { padding: 0 } } },
    MuiChip: { styleOverrides: { root: { font: '500 12px/145% Inter !important' } } }
  }
})

interface AppThemeProps {
  children: ReactNode
}
export const ThemeType = typeof theme
export const AppTheme = ({ children }: AppThemeProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
