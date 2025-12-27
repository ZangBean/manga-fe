import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/reader/header'
import Footer from '@/components/layout/reader/footer'

export default function ReaderLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
