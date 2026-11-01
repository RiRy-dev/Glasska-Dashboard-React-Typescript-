import { IconButton, Stack, Tooltip, Typography, useMediaQuery } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'

import { AppIcon } from './appicon'

export const ColorModeToggle = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isPhoneWide = useMediaQuery('(min-width:480px')
  const { mode, systemMode, setMode } = useColorScheme()
  const current = mode === 'system' ? systemMode : mode

  // mode is undefined until the color scheme is resolved on first render
  if (!current) return null

  const next = current === 'dark' ? 'light' : 'dark'

  return (
    <Stack
      onClick={() => setMode(next)}
      aria-label={`Switch to ${next} mode`}
      direction='row'
      sx={{ alignItems: 'center', width: '100%', px: 1, py: 2, gap: 0.5 }}
    >
      <Tooltip title={`Switch to ${next} mode`} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <IconButton>
          <AppIcon name={current === 'dark' ? 'light' : 'dark'} />
        </IconButton>
      </Tooltip>
      {(!isPhoneWide && (
        <Typography variant='h6' sx={{ color: 'text.disabled' }}>
          Theme
        </Typography>
      )) ||
        (!isMobile && (
          <Typography variant='h6' sx={{ color: 'text.disabled' }}>
            Theme
          </Typography>
        ))}
    </Stack>
  )
}
