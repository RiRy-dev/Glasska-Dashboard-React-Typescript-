import { AppIcon, ColorModeToggle } from '@/core'
import { Badge, Box, Divider, List, Stack, Typography, useMediaQuery } from '@mui/material'
import { NavLink } from 'react-router'
import { SIDEBAR } from '@/constants/sidebar'
import NavItem from '@/components/NavItem'

function Circle() {
  return (
    <Box
      component='span'
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #28C5EE 0%, #4172BD 100%)',
        width: 40,
        height: 40,
        borderRadius: '50%'
      }}
    >
      <Typography variant='h5' component='span' sx={{ color: 'white' }}>
        AD
      </Typography>
    </Box>
  )
}

export default function Sidebar() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const navMain = SIDEBAR.main.map(item => (
    <NavItem key={item.label} label={item.label} url={item.url} count={item.count} />
  ))
  const navAddIns = SIDEBAR.addIns.map(item => (
    <NavItem key={item.label} label={item.label} url={item.url} count={item.count} />
  ))
  const navOthers = SIDEBAR.others.map(item => (
    <NavItem key={item.label} label={item.label} url={item.url} count={item.count} />
  ))

  return (
    <Stack
      direction='column'
      sx={{
        position: 'sticky',
        minWidth: isMobile ? 74 : 272,
        height: '100vh',
        overflow: 'hidden',
        top: 0,
        bgcolor: 'background.paper',
        justifyContent: 'space-between',
        px: 1.5
      }}
    >
      <Box>
        <NavLink to='/'>
          <AppIcon
            name={isMobile ? 'dashboard' : 'logo'}
            width='100%'
            height='auto'
            sx={{ display: 'flex', alignItems: 'center', paddingBlock: 2 }}
          />
        </NavLink>
        <List>{navMain}</List>
        <Divider />
        <List>{navAddIns}</List>
      </Box>
      <Stack sx={{ gap: 2 }}>
        <List>
          <ColorModeToggle />
          {navOthers}
        </List>
        <Stack direction={'row'} sx={{ gap: '12px', alignItems: 'center', padding: '16px 12px' }}>
          <Badge
            color='primary'
            overlap='circular'
            variant='dot'
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
          >
            <Circle />
          </Badge>
          {!isMobile && (
            <Stack>
              <Typography variant='h6' sx={{ fontWeight: 600 }}>
                Admin Manager
              </Typography>
              <Typography variant='h6'>admin1@glasska.com</Typography>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  )
}
