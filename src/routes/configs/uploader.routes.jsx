import { Route } from 'react-router-dom'
import { lazy } from 'react'
import { ROUTER_PATH } from '@/constants/routers'
import UploaderLayout from '@/layouts/uploader/UploaderLayout'

const DashboardPage = lazy(() => import('@/pages/uploader/DashboardPage'))
const SeriesListPage = lazy(() => import('@/pages/uploader/SeriesListPage'))
const ChapterUploadPage = lazy(() =>
  import('@/pages/uploader/ChapterUploadPage')
)
const AnalyticsPage = lazy(() => import('@/pages/uploader/AnalyticsPage'))

const UploaderRoutes = (
  <Route element={<UploaderLayout />}>
    <Route
      path={ROUTER_PATH.UPLOADER_DASHBOARD_PAGE.PATH}
      element={<DashboardPage />}
    />
    <Route
      path={ROUTER_PATH.UPLOADER_SERIES_LIST.PATH}
      element={<SeriesListPage />}
    />
    <Route
      path={ROUTER_PATH.UPLOADER_CHAPTER_UPLOAD.PATH}
      element={<ChapterUploadPage />}
    />
    <Route
      path={ROUTER_PATH.UPLOADER_ANALYTICS.PATH}
      element={<AnalyticsPage />}
    />
  </Route>
)

export default UploaderRoutes
