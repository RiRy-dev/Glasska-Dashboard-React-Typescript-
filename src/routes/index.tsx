import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'

import { routers } from '@/constants/routers'
import Layout from '@/layout'

const Dashboard = lazy(() => import('@/pages/dashboard'))
const NotFound = lazy(() => import('@/pages/not-found'))

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: routers.LANDING,
        element: <Dashboard />,
        errorElement: <NotFound />
      },
      {
        path: '*',
        element: <NotFound />,
        errorElement: <NotFound />
      }
    ]
  }
])

export default routes
