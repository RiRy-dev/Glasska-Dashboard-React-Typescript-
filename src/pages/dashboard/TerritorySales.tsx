import SalesBarChart from '@/components/charts/sales'
import RoundedContainer from '@/components/RoundedContainer'

export default function TerritorySales() {
  return (
    <RoundedContainer type='chart' title='Territory Wise Sales'>
      <SalesBarChart />
    </RoundedContainer>
  )
}
