import { AppIcon } from '@/core'
import { Avatar, Chip, Stack, Typography } from '@mui/material'

export default function Metrics({ type, figure, badgeFigure, badgeContent }: Record<string, string>) {
  return (
    <Stack direction='row' sx={{ width: '100%', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
      <Stack direction='column' sx={{ gap: 1, height: '100%' }}>
        <Typography variant='h6'>{type}</Typography>
        <Typography variant='h4'>{figure}</Typography>
        {badgeFigure && (
          <Stack direction='row' sx={{ alignItems: 'center', gap: 0.75 }}>
            <Chip
              label={badgeFigure}
              icon={<AppIcon name='figure' width={12} />}
              sx={{
                bgcolor: '#E7F6EC',
                height: 'fit-content',
                color: '#47AF2A',
                paddingLeft: '4px',
                font: '500 12px/145% Inter',
                '& .MuiChip-icon': {
                  margin: 0
                },
                '& .MuiChip-label': {
                  px: 0.5 // Horizontal padding (left and right)
                }
              }}
            />
            <Typography
              sx={{
                font: '500 12px/145% Inter',
                color: '#47AF2A'
              }}
            >
              {badgeContent}
            </Typography>
          </Stack>
        )}
      </Stack>
      <Avatar sx={{ bgcolor: '#F5F7F9', border: `1px solid #E4E7EC` }}>
        <AppIcon name={type.split(' ')[0].toLowerCase()} width={20} />
      </Avatar>
    </Stack>
  )
}
