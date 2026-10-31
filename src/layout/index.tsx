import { Box, CircularProgress, Container } from '@mui/material'
import { Suspense } from 'react'
import { Outlet } from 'react-router'

import Sidebar from './sidebar'

export default function Layout() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
      <Sidebar />
      <Container component='main' sx={{ flex: 1, px: 3, py: 3, height: '100vh', overflowY: 'auto' }}>
        <Suspense
          fallback={
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
              <CircularProgress />
            </Box>
          }
        >
          <Outlet />
        </Suspense>
      </Container>
    </Box>
  )
}
