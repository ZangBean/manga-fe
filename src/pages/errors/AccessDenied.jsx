import { useAuth } from '@/contexts/AuthContext'

export default function AccessDenied() {
  const { user } = useAuth()

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
      <div className='bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center'>
        <div className='mb-6'>
          <h1 className='text-6xl font-bold text-red-600'>403</h1>
          <h2 className='text-2xl font-semibold text-gray-800 mt-2'>
            Access Denied
          </h2>
        </div>

        <p className='text-gray-600 mb-8'>
          Bạn không có quyền truy cập trang này.
        </p>

        {user?.role && (
          <p className='text-sm text-gray-500 mb-6'>
            (Tài khoản của bạn hiện tại là: <strong>{user.role}</strong>)
          </p>
        )}

        <div className='space-y-4'>
          <button
            onClick={() => window.history.back()}
            className='w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2'
          >
            Quay lại trang trước
          </button>

          <a
            href='/'
            className='w-full block py-3 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition'
          >
            Về trang chủ
          </a>
        </div>
      </div>
    </div>
  )
}
