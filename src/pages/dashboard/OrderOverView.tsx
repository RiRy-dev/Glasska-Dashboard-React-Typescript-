import OrderBarChart from '@/components/charts/order'
import RoundedContainer from '@/components/RoundedContainer'
//howto888
export default function OrderOverView() {
  return (
    <RoundedContainer type='chart' title={'Order Overview'}>
      <OrderBarChart />
    </RoundedContainer>
  )
}
