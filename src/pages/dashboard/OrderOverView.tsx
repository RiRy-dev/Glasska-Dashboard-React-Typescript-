import OrderBarChart from '@/components/charts/order'
import RoundedContainer from '@/components/RoundedContainer'

export default function OrderOverView() {
  return (
    <RoundedContainer type='chart' title={'Order Overview'}>
      <OrderBarChart />
    </RoundedContainer>
  )
}
