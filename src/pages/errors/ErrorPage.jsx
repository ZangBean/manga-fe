export default function ErrorPage() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100'>
      <div className='text-center'>
        <div className='text-6xl mb-4'>😵</div>
        <h2 className='text-2xl font-bold text-gray-800 mb-2'>Lỗi tải manga</h2>
        <p className='text-gray-600 mb-4'>
          Không thể kết nối đến máy chủ. Vui lòng thử lại.
        </p>
        <button
          onClick={() => window.location.reload()}
          className='bg-indigo-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-indigo-700 transition-colors'
        >
          Thử Lại
        </button>
      </div>
    </div>
  )
}
