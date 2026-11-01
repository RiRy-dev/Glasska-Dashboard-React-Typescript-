import { Button } from '@mui/material'
import { Link } from 'react-router'

import { EmptyState } from '@/components'
import { routers } from '@/constants/routers'

export default function NotFound() {
  return (
    <EmptyState
      title='Page not found'
      description='The page you are looking for does not exist.'
      action={
        <Button variant='outlined' component={Link} to={routers.LANDING} sx={{ px: 1, py: 1 }}>
          Back to home
        </Button>
      }
    />
  )
}
