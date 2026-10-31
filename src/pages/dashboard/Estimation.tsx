import RoundedContainer from '@/components/RoundedContainer'
import { Stack, useMediaQuery } from '@mui/material'
import Metrics from './Metrics'

export default function Estimation() {
  const isDesktop = useMediaQuery('(max-width:1024px)')

  return (
    <Stack direction={'row'} sx={{ gap: 2, width: '100%', flexWrap: isDesktop ? 'wrap' : 'nowrap' }}>
      <RoundedContainer type='data'>
        <Metrics type='Average Completion' figure='6.382%' badgeFigure='5%' badgeContent='Healthy' />
      </RoundedContainer>
      <RoundedContainer type='data'>
        <Metrics type='Total Order' figure='524' />
      </RoundedContainer>
      <RoundedContainer type='data'>
        <Metrics type='Completed' figure='524' badgeFigure='5%' badgeContent='Healthy' />
      </RoundedContainer>
      <RoundedContainer type='data'>
        <Metrics type='Overdue' figure='1' />
      </RoundedContainer>
    </Stack>
  )
}
