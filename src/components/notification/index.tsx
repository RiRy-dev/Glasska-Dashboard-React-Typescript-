import { AppIcon } from '@/core'
import { Button, Chip, Icon, Stack, Typography, useMediaQuery } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

export default function Notification() {
  const isPhoneWide = useMediaQuery('(min-width: 480px)')

  return (
    <Stack direction='row' sx={{ gap: 2, alignItems: 'flex-start' }}>
      <AppIcon name='jason' width={40} height={40} />
      <Stack direction='column' sx={{ gap: 2, flexGrow: 1 }}>
        <Stack direction='column' sx={{ gap: 0.5 }}>
          <span>
            Jason Stathem <strong> update the order </strong> PO_FrontStore_#183
          </span>
          <Typography variant='h6'>8 minutes ago</Typography>
        </Stack>
        <Stack direction={isPhoneWide ? 'row' : 'column'} sx={{ gap: 2, alignItems: 'center', width: 'fit-content' }}>
          <span className='status progress'>On Progress</span>
          <AppIcon name='arrow' />
          <span className='status completed'>Completed</span>
        </Stack>
      </Stack>
      <Button variant='outlined' sx={{ minWidth: '36px', minHeight: '36px', borderColor: '#E4E7EC' }}>
        <Icon children={<MoreHorizIcon />} sx={{ color: '#5B6581' }} />
      </Button>
    </Stack>
  )
}
