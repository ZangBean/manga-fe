import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function PublicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
