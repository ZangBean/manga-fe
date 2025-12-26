import { Route } from 'react-router-dom'
import { lazy } from 'react'
import { ROUTER_PATH } from '@/constants/routers'
import ReaderLayout from '@/layouts/reader/ReaderLayout'

const UploaderDashboardPage = lazy(() =>
  import('@/pages/uploader/UploaderDashboardPage')
)

const UploaderRoutes = (
  <Route element={<ReaderLayout />}>
    <Route
      path={ROUTER_PATH.UPLOADER_DASHBOARD_PAGE.PATH}
      element={<UploaderDashboardPage />}
    />
  </Route>
)

export default UploaderRoutes
