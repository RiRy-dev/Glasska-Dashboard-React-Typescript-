import { IconButton, Stack, Tooltip, Typography, useMediaQuery } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'

import { AppIcon } from './appicon'

export const ColorModeToggle = () => {
  const isMobile = useMediaQuery('(min-width: 768px)')
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
      sx={{ alignItems: 'center', cursor: 'pointer', flex: 1, gap: 0.5 }}
    >
      <Tooltip title={`Switch to ${next} mode`} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <IconButton aria-label='icon button' sx={{ p: 0.5 }}>
          <AppIcon name={current === 'dark' ? 'light' : 'dark'} />
        </IconButton>
      </Tooltip>
      {isMobile && (
        <Typography variant='h6' sx={{ color: 'text.disabled' }}>
          Theme
        </Typography>
      )}
    </Stack>
  )
}
