import { routers } from '@/constants'
import { AppIcon } from '@/core'
import { Chip, Stack, styled, Typography, useMediaQuery } from '@mui/material'
import { NavLink } from 'react-router'
import { Sidebar } from '@/constants/sidebar'

const CustomNavLink = styled(NavLink)(({ theme }) => {
  const { palette } = theme.vars || theme
  const { shape } = theme.vars || theme

  return {
    display: 'flex',
    flexDirection: 'row',
    padding: '12px 16px',
    borderRadius: shape.borderRadius,
    color: palette.text.primary,
    fontSize: 14,
    lineHeight: '145%',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    '&:hover': { backgroundColor: palette.secondary.main },
    '&.active': {
      color: palette.text.secondary,
      backgroundColor: palette.secondary.main
    },
    '&.active svg': {
      filter: 'invert(72%) sepia(80%) saturate(1518%) hue-rotate(162deg) brightness(98%) contrast(93%)'
    }
  }
})

export default function NavItem({ label, url, count }: Sidebar) {
  const isMobile = useMediaQuery('(min-width: 768px)')
  const isPhoneWide = useMediaQuery('(max-width:480px')

  return (
    <CustomNavLink to={url}>
      <Stack
        direction='row'
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          gap: 4
        }}
      >
        <Stack
          direction='row'
          sx={{
            gap: 1.5,
            flexGrow: 1,
            justifyContent: isMobile ? 'flex-start' : isPhoneWide ? 'flex-start' : 'center'
          }}
        >
          <AppIcon name={label.split(' ')[0].toLowerCase()} />
          {isPhoneWide && (
            <Typography variant='h6' sx={{ gap: 4, fontWeight: 500 }}>
              {label}
            </Typography>
          )}
          {isMobile && (
            <Typography variant='h6' sx={{ gap: 4, fontWeight: 500 }}>
              {label}
            </Typography>
          )}
        </Stack>
        {isMobile && count && <Chip label={count} />}
      </Stack>
    </CustomNavLink>
  )
}
