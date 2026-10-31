import { FC } from 'react'
import { Stack } from '@mui/material'
import { DarkMode, LightMode } from '@mui/icons-material'

import Logo from '@/assets/svg/logo.svg?react'
import Order from '@/assets/svg/order.svg?react'
import Schedule from '@/assets/svg/schedule.svg?react'
import Customer from '@/assets/svg/customer.svg?react'
import Employee from '@/assets/svg/employee.svg?react'
import Dashboard from '@/assets/svg/dashboard.svg?react'
import Google from '@/assets/svg/google.svg?react'
import Paypal from '@/assets/svg/paypal.svg?react'
import Settings from '@/assets/svg/settings.svg?react'
import Help from '@/assets/svg/help.svg?react'
import Refer from '@/assets/svg/refer.svg?react'
import Figure from '@/assets/svg/figure.svg?react'
import Average from '@/assets/svg/average.svg?react'
import Total from '@/assets/svg/total.svg?react'
import Completed from '@/assets/svg/completed.svg?react'
import Overdue from '@/assets/svg/overdue.svg?react'
import Notifications from '@/assets/svg/notifications.svg?react'

export const ICON_MAP = {
  dark: DarkMode,
  light: LightMode,
  logo: Logo,
  order: Order,
  schedule: Schedule,
  customer: Customer,
  employee: Employee,
  dashboard: Dashboard,
  figure: Figure,
  google: Google,
  paypal: Paypal,
  settings: Settings,
  help: Help,
  refer: Refer,
  average: Average,
  total: Total,
  completed: Completed,
  overdue: Overdue,
  notifications: Notifications
}

export type IconName = keyof typeof ICON_MAP

interface AppIconProps {
  name: string
  width?: string | number
  height?: string | number
  className?: string
  size?: number
  colors?: string
  borderRadius?: string
}

export const AppIcon: FC<AppIconProps> = ({
  name,
  colors,
  size = 20,
  height,
  width,
  borderRadius,
  className = '',
  ...props
}) => {
  const IconComponent = ICON_MAP[name]

  if (!IconComponent) {
    console.error(`Icon "${name}" not found.`)

    return null
  }

  return (
    <Stack
      className={`app-icon ${className}`}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 'max-content',

        color: colors,
        '& svg': { width: width || size || '100%', height: height || size, borderRadius: borderRadius }
      }}
      {...props}
    >
      <IconComponent />
    </Stack>
  )
}
