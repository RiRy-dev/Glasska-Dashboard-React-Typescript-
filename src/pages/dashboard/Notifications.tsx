import Notification from '@/components/notification'
import RoundedContainer from '@/components/RoundedContainer'

export default function Notifications() {
  return (
    <RoundedContainer
      type='chart'
      title='Recent Notifications'
      sx={{ gap: 2, flexDirection: 'column', width: 'calc(50% - 16px)' }}
    >
      <Notification />
      <Notification />
    </RoundedContainer>
  )
}
