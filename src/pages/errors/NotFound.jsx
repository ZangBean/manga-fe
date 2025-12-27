import { useNavigate } from 'react-router-dom'

import Header from '@/components/layout/reader/header'
import Footer from '@/components/layout/reader/footer'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      <Header />

      <main className='flex-1 flex items-center justify-center px-4'>
        <div className='text-center space-y-4'>
          <div className='text-7xl font-bold text-indigo-600'>404</div>
          <h1 className='text-2xl font-semibold text-gray-800'>
            Không tìm thấy trang
          </h1>
          <p className='text-sm text-gray-600 max-w-md mx-auto'>
            Trang bạn đang tìm không tồn tại hoặc đã bị xoá.
          </p>
          <button
            onClick={() => navigate('/')}
            className='mt-4 px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition'
          >
            Quay về trang chủ
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
