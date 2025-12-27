// pages/uploader/SeriesListPage.jsx
import { Link } from 'react-router-dom'
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'

export default function SeriesListPage() {
  // Giả lập data
  const series = [
    {
      id: 1,
      title: 'Ác Quỷ Học Đường',
      status: 'Ongoing',
      views: '124.5k',
      cover: '',
    },
    {
      id: 2,
      title: 'Hành Trình Tu Tiên',
      status: 'Hiatus',
      views: '89.3k',
      cover: '',
    },
    // ...
  ]

  return (
    <div className='p-4 md:p-6 space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>Truyện của tôi</h1>
        <Link
          to='/uploader/series/new'
          className='bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg flex items-center gap-2 font-medium'
        >
          <FaPlus /> Tạo truyện mới
        </Link>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {series.map((s) => (
          <div
            key={s.id}
            className='bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-colors'
          >
            <div className='aspect-[3/4] bg-gray-700 relative'>
              {/* cover image */}
            </div>
            <div className='p-4'>
              <h3 className='font-semibold text-lg mb-1 truncate'>{s.title}</h3>
              <div className='text-sm text-gray-400 mb-3'>
                {s.status} • {s.views} views
              </div>
              <div className='flex gap-3'>
                <Link
                  to={`/uploader/series/${s.id}`}
                  className='flex-1 bg-blue-600/30 hover:bg-blue-600/50 py-2 rounded text-center text-sm'
                >
                  Chi tiết
                </Link>
                <button className='p-2 bg-gray-700 hover:bg-gray-600 rounded'>
                  <FaEdit />
                </button>
                <button className='p-2 bg-red-600/30 hover:bg-red-600/50 rounded'>
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
