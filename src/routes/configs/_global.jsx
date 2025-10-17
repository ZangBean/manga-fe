import React from 'react'
import { Route } from 'react-router-dom'

import { ROUTER_PATH } from '@/constants/routers'

import PublicLayout from '@/layouts/publicLayouts/PublicLayout'

const HomePage = React.lazy(() =>
  import('@/pages/globalPages/HomePage').then((module) => ({
    default: module.default,
  }))
)

const NotFoundPage = React.lazy(() =>
  import('@/pages/errors/NotFound').then((module) => ({
    default: module.default,
  }))
)

const GlobalRoutes = (
  <>
    <Route element={<PublicLayout />}>
      <Route path={ROUTER_PATH.HOME_PAGE.PATH} element={<HomePage />} />
    </Route>
    <Route path='*' element={<NotFoundPage />} />
  </>
)

export default GlobalRoutes
