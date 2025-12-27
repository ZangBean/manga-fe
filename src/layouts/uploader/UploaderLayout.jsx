import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/uploader/Header'
import Footer from '@/components/layout/uploader/Footer'
import Sidebar from '@/components/layout/uploader/Sidebar'

export default function UploaderLayout() {
  return (
    <div className='min-h-screen bg-gray-950 text-gray-100 flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <Header />
        <main className='flex-1 overflow-y-auto p-4 md:p-6 lg:p-8'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
