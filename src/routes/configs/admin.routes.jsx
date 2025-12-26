import { Route } from 'react-router-dom'
import { lazy } from 'react'
import { ROUTER_PATH } from '@/constants/routers'
import ReaderLayout from '@/layouts/reader/ReaderLayout'

const AdminDashboardPage = lazy(() =>
  import('@/pages/admin/AdminDashboardPage')
)

const AdminRoutes = (
  <Route element={<ReaderLayout />}>
    <Route
      path={ROUTER_PATH.ADMIN_DASHBOARD_PAGE.PATH}
      element={<AdminDashboardPage />}
    />
  </Route>
)

export default AdminRoutes
