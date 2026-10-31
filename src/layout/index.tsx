import { Box, CircularProgress, Container } from '@mui/material'
import { Suspense } from 'react'
import { Outlet } from 'react-router'

import Sidebar from './sidebar'

export default function Layout() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'row', scrollbarGutter: 'stable' }}>
      <Sidebar />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          height: '100%',
          overflowY: 'auto',
          scrollbarGutter: 'stable'
        }}
      >
        <Container component='main' sx={{ flex: 1, px: 3, py: 3, height: '100vh' }}>
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
    </Box>
  )
}
