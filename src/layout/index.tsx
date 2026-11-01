import { Box, CircularProgress, Container, useMediaQuery } from '@mui/material'
import { Suspense } from 'react'
import { Outlet } from 'react-router'
import Header from './header'
import Sidebar from './sidebar'

export default function Layout() {
  const isPhoneWide = useMediaQuery('(min-width: 480px)')

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: isPhoneWide ? 'row' : 'column',
        scrollbarGutter: 'stable'
      }}
    >
      {isPhoneWide ? <Sidebar /> : <Header />}
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
