import { OpportunityPieChart } from '@/components/charts/opportunity'
import RoundedContainer from '@/components/RoundedContainer'

export default function TerritoryOpportunity() {
  return (
    <RoundedContainer type='chart' title='Territory Wise Opportunity'>
      <OpportunityPieChart />
    </RoundedContainer>
  )
}
