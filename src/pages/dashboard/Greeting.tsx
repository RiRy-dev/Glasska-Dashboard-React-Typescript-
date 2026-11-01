import { Box, Button, IconButton, Stack, styled, Typography, useMediaQuery } from '@mui/material'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import RoundedContainer from '@/components/RoundedContainer'
import { AppIcon } from '@/core'
import { formatDate } from '@/util'
import dayjs from 'dayjs'
import { useState } from 'react'
import { Translate } from '@mui/icons-material'
import { PickerValue } from '@mui/x-date-pickers/internals'

const DatePicker = styled(DateCalendar)(({ theme }) => {
  const { palette } = theme.vars || theme
  const isPhablet = useMediaQuery('(min-width:560px)')

  return {
    position: 'absolute',
    top: 0,
    left: isPhablet ? 'calc(100% + 8px)' : -8,
    transform: isPhablet ? 'translateX(-100%)' : 'translateX(-50px)',
    backgroundColor: palette.background.paper,
    border: `2px solid ${palette.secondary.dark}`,
    borderRadius: 16,
    zIndex: 10,
    top: 'calc(100% + 20px)'
  }
})

export default function Greeting() {
  const isPhablet = useMediaQuery('(min-width:560px)')
  const [visible, setVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()))

  const onDateChange = (value: PickerValue) => {
    setSelectedDate(formatDate(value as unknown as Date))
    setVisible(false)
  }

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
        <IconButton sx={{ bgcolor: 'background.default' }} onClick={() => setVisible(prev => !prev)}>
          <AppIcon name='schedule' />
        </IconButton>
        <Stack direction='column' sx={{ position: 'relative' }}>
          <Typography variant='h6' sx={{ fontSize: '10px' }}>
            Today's Date
          </Typography>
          <Typography variant='h6' sx={{ fontWeight: 600, color: 'text.secondary' }}>
            {selectedDate}
          </Typography>
          {visible && <DatePicker onChange={(value: PickerValue) => onDateChange(value)} />}
        </Stack>
      </RoundedContainer>
    </Stack>
  )
}
