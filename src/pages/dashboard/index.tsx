import { Stack } from '@mui/material'
import Estimation from './Estimation'
import Greeting from './Greeting'
import OrderOverView from './OrderOverView'
import TerritorySales from './TerritorySales'
import TerritoryOpportunity from './TerritoryOpportunity'
import { OpportunityDonutChart } from '@/components/charts/opportunity'
import RoundedContainer from '@/components/RoundedContainer'
import Notifications from './Notifications'

export default function Dashboard() {
  return (
    <Stack sx={{ gap: 2 }}>
      <Greeting />
      <Estimation />
      <OrderOverView />
      <Stack direction='row' sx={{ gap: 2, flexWrap: 'wrap' }}>
        <TerritorySales />
        <Notifications />
      </Stack>
      <Stack direction='row' sx={{ gap: 2, flexWrap: 'wrap' }}>
        <TerritoryOpportunity />
        <RoundedContainer type='chart' title='Opportunity via Can...'>
          <OpportunityDonutChart />
        </RoundedContainer>
      </Stack>
    </Stack>
  )
}
