import { AppIcon, ColorModeToggle } from '@/core'
import { Badge, Box, Divider, List, ListItem, Stack, Typography, useMediaQuery } from '@mui/material'
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
  const isPhoneWide = useMediaQuery('(min-width:480px')

  const navMain = SIDEBAR.main.map(item => (
    <ListItem key={item.label} sx={{ px: 0, py: 0 }}>
      <NavItem label={item.label} url={item.url} count={item.count} />
    </ListItem>
  ))
  const navAddIns = SIDEBAR.addIns.map(item => (
    <ListItem key={item.label} sx={{ px: 0, py: 0 }}>
      <NavItem label={item.label} url={item.url} count={item.count} />
    </ListItem>
  ))
  const navOthers = SIDEBAR.others.map(item => (
    <ListItem key={item.label} sx={{ px: 0, py: 0 }}>
      <NavItem key={item.label} label={item.label} url={item.url} count={item.count} />
    </ListItem>
  ))

  return (
    <Stack
      direction='column'
      sx={{
        position: isPhoneWide ? 'sticky' : 'absolute',
        minWidth: isMobile ? 74 : 272,
        width: isPhoneWide ? 'fit-content' : '100%',
        height: '100vh',
        overflow: 'hidden',
        top: 0,
        bgcolor: 'background.paper',
        justifyContent: isPhoneWide ? 'space-between' : 'flex-start',
        px: 1.5,
        zIndex: 10
      }}
    >
      <Box>
        <NavLink to='/' aria-label='Read more about Seminole tax hike'>
          <AppIcon
            name={isMobile ? 'logoSmall' : 'logo'}
            width='100%'
            height='auto'
            sx={{ display: isPhoneWide ? 'flex' : 'none', m: 'auto', alignItems: 'center', paddingBlock: 2 }}
          />
        </NavLink>
        <List>{navMain}</List>
        <Divider />
        <List>{navAddIns}</List>
      </Box>
      <Stack sx={{ gap: 2 }}>
        <List>
          <ListItem key={'theme-button'} sx={{ px: 1.5, py: 2 }}>
            <ColorModeToggle />
          </ListItem>
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
          {(!isMobile && (
            <Stack>
              <Typography variant='h6' sx={{ fontWeight: 600 }}>
                Admin Manager
              </Typography>
              <Typography variant='h6' sx={{ color: 'text.disabled' }}>
                admin1@glasska.com
              </Typography>
            </Stack>
          )) ||
            (!isPhoneWide && (
              <Stack>
                <Typography variant='h6' sx={{ fontWeight: 600 }}>
                  Admin Manager
                </Typography>
                <Typography variant='h6' sx={{ color: 'text.disabled' }}>
                  admin1@glasska.com
                </Typography>
              </Stack>
            ))}
        </Stack>
      </Stack>
    </Stack>
  )
}
