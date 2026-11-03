import { lazy } from 'react'
import { Stack } from '@mui/material'
import { OpportunityDonutChart } from '@/components/charts/opportunity'
import RoundedContainer from '@/components/RoundedContainer'
import Notifications from './Notifications'

const Estimation = lazy(() => import('./Estimation'))
const Greeting = lazy(() => import('./Greeting'))
const OrderOverView = lazy(() => import('./OrderOverView'))
const TerritorySales = lazy(() => import('./TerritorySales'))
const TerritoryOpportunity = lazy(() => import('./TerritoryOpportunity'))

export default function Dashboard() {
  return (
    <Stack sx={{ gap: 2 }}>
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
