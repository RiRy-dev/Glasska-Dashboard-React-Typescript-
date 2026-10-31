import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'

import { routers } from '@/constants/routers'
import Layout from '@/layout'
import Dashboard from '@/pages/dashboard'

const NotFound = lazy(() => import('@/pages/not-found'))

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: routers.LANDING,
        element: <Dashboard disableGutters />,
        errorElement: <></>
      },
      {
        path: '*',
        element: <NotFound />,
        errorElement: <></>
      }
    ]
  }
])

export default routes
