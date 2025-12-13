import { Route } from 'react-router-dom'
import { lazy } from 'react'
import { ROUTER_PATH } from '@/constants/routers'
import ReaderLayout from '@/layouts/reader/ReaderLayout'

const HomePage = lazy(() => import('@/pages/reader/HomePage'))

const ReaderRoutes = (
  <Route element={<ReaderLayout />}>
    <Route path={ROUTER_PATH.HOME_PAGE.PATH} element={<HomePage />} />
  </Route>
)

export default ReaderRoutes
