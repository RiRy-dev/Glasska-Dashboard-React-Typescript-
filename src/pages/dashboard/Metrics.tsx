import { AppIcon } from '@/core'
import { Avatar, Chip, Stack, Typography, useColorScheme } from '@mui/material'

export default function Metrics({ type, figure, badgeFigure, badgeContent }: Record<string, string>) {
  const { mode } = useColorScheme()

  return (
    <Stack direction='row' sx={{ width: '100%', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
      <Stack direction='column' sx={{ gap: 1, height: '100%' }}>
        <Typography variant='h6' sx={{ color: '#475367' }}>
          {type}
        </Typography>
        <Typography variant='h4' sx={{ color: 'text.disabled' }}>
          {figure}
        </Typography>
        {badgeFigure && (
          <Stack direction='row' sx={{ alignItems: 'center', gap: 0.75 }}>
            <Chip
              label={badgeFigure}
              icon={<AppIcon name='figure' width={12} />}
              sx={{
                bgcolor: mode === 'light' ? '#E7F6EC' : '#12422C',
                height: 'fit-content',
                color: '#47AF2A',
                paddingLeft: '4px',
                font: '500 12px/145% Inter',
                '& .MuiChip-icon': {
                  margin: 0
                },
                '& .MuiChip-label': {
                  px: 0.5,
                  font: '500 12px/145% Inter'
                }
              }}
            />
            <Typography
              sx={{
                font: '400 12px/145% Inter',
                color: '#47AF2A'
              }}
            >
              {badgeContent}
            </Typography>
          </Stack>
        )}
      </Stack>
      <Avatar sx={{ bgcolor: 'common.background', border: `1px solid #E4E7EC` }}>
        <AppIcon name={type.split(' ')[0].toLowerCase()} width={20} colors={mode === 'light' ? '#081526' : '#09BEF9'} />
      </Avatar>
    </Stack>
  )
}
