import { routers } from './routers'

export interface Sidebar {
  label: string
  url: string
  count?: number
}

export const SIDEBAR: Record<string, Sidebar[]> = {
  main: [
    {
      label: 'Dashboard',
      url: routers.LANDING
    },
    {
      label: 'Order Management',
      url: routers.ORDER,
      count: 6
    },
    {
      label: 'Schedule',
      url: routers.SCHEDULE
    },
    {
      label: 'Customer Management',
      url: routers.CUSTOMER
    },
    {
      label: 'Employee',
      url: routers.EMPLOYEE
    },
    {
      label: 'Notifications',
      url: routers.NOTIFICATIONS,
      count: 10
    }
  ],
  addIns: [
    {
      label: 'Google Drive',
      url: routers.GOOGLE
    },
    {
      label: 'paypal',
      url: routers.PAYPAL
    }
  ],
  others: [
    {
      label: 'Settings',
      url: routers.SETTINGS
    },
    {
      label: 'Help Center',
      url: routers.HELP
    },
    {
      label: 'Refer family & friends',
      url: routers.REFER
    }
  ]
}
