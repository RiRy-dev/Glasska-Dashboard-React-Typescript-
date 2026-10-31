import { Stack, Typography, useMediaQuery } from '@mui/material'
import RoundedContainer from '@/components/RoundedContainer'
import { AppIcon } from '@/core'
import { formatDate } from '@/util'

export default function Greeting() {
  const isPhablet = useMediaQuery('(min-width:560px)')

  return (
    <Stack direction={isPhablet ? 'row' : 'column'} sx={{ justifyContent: 'space-between' }}>
      <Stack>
        <Typography variant='h3' sx={{ color: 'text.secondary' }}>
          Welcome Irvan,
        </Typography>
        <Typography variant='h6'>It’s a sunny day today, ready to make money today? 😊</Typography>
      </Stack>
      <RoundedContainer
        title=''
        type='data'
        sx={{ width: 'fit-content', flex: 'none', alignItems: 'center', px: 1, py: 0.75, gap: 1 }}
      >
        <AppIcon name='schedule' />
        <Stack direction='column'>
          <Typography variant='h6' sx={{ fontSize: '10px' }}>
            Today's Date
          </Typography>
          <Typography variant='h6' sx={{ fontWeight: 600, color: 'text.secondary' }}>
            {formatDate(new Date())}
          </Typography>
        </Stack>
      </RoundedContainer>
    </Stack>
  )
}
