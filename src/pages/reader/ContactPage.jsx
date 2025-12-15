export default function ContactPage() {
  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Hero */}
      <div className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 text-center'>
        <h1 className='text-3xl font-semibold'>Liên hệ</h1>
        <p className='mt-3 text-sm opacity-90 max-w-xl mx-auto'>
          Kết nối với chúng tôi qua các kênh chính thức bên dưới. Chúng tôi luôn
          sẵn sàng hỗ trợ.
        </p>
      </div>

      {/* Content */}
      <div className='max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6'>
        <div className='bg-white rounded-2xl shadow p-6 text-center space-y-2'>
          <div className='text-3xl'>📍</div>
          <h2 className='font-semibold'>Địa chỉ</h2>
          <p className='text-sm text-gray-600'>Hà Nội, Việt Nam</p>
        </div>

        <div className='bg-white rounded-2xl shadow p-6 text-center space-y-2'>
          <div className='text-3xl'>📧</div>
          <h2 className='font-semibold'>Email</h2>
          <p className='text-sm text-gray-600'>contact@company.com</p>
        </div>

        <div className='bg-white rounded-2xl shadow p-6 text-center space-y-2'>
          <div className='text-3xl'>📞</div>
          <h2 className='font-semibold'>Hotline</h2>
          <p className='text-sm text-gray-600'>0123 456 789</p>
        </div>
      </div>

      {/* Map */}
      <div className='max-w-6xl mx-auto px-6 pb-20'>
        <div className='bg-white rounded-2xl shadow overflow-hidden'>
          <iframe
            title='map'
            src='https://www.google.com/maps?q=Hà%20Nội&output=embed'
            className='w-full h-96 border-0'
            loading='lazy'
          />
        </div>
      </div>
    </div>
  )
}
