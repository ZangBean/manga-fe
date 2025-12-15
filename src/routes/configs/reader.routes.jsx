import { Route } from 'react-router-dom'
import { lazy } from 'react'
import { ROUTER_PATH } from '@/constants/routers'
import ReaderLayout from '@/layouts/reader/ReaderLayout'

const HomePage = lazy(() => import('@/pages/reader/HomePage'))
const NewsPage = lazy(() => import('@/pages/reader/NewsPage'))
const ContactPage = lazy(() => import('@/pages/reader/ContactPage'))

const ReaderRoutes = (
  <Route element={<ReaderLayout />}>
    <Route path={ROUTER_PATH.HOME_PAGE.PATH} element={<HomePage />} />
    <Route path={ROUTER_PATH.NEWS_PAGE.PATH} element={<NewsPage />} />
    <Route path={ROUTER_PATH.CONTACT_PAGE.PATH} element={<ContactPage />} />
  </Route>
)

export default ReaderRoutes
