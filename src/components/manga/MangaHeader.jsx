import { Link } from 'react-router-dom'
import { FaEye, FaComments, FaHeart, FaPlay } from 'react-icons/fa'

export default function MangaHeader({
  manga,
  latestChapter,
  firstChapter,
  mangaId,
}) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16'>
      {/* Cover */}
      <div className='lg:col-span-4'>
        <div
          className='relative h-137.5 bg-cover bg-center rounded-lg overflow-hidden shadow-2xl'
          style={{ backgroundImage: `url(${manga.coverImageUrl})` }}
        >
          <div className='absolute bottom-6 left-4 bg-[#3d3d3d]/90 backdrop-blur-sm text-white text-sm px-3 py-1 rounded flex items-center gap-2'>
            <FaComments /> {manga.comments ?? 11}
          </div>
          <div className='absolute bottom-6 right-4 bg-[#3d3d3d]/90 backdrop-blur-sm text-white text-sm px-3 py-1 rounded flex items-center gap-2'>
            <FaEye /> {manga.viewCount?.toLocaleString() ?? 9141}
          </div>
        </div>
      </div>

      {/* Info + Actions */}
      <div className='lg:col-span-8 text-white flex flex-col justify-between'>
        <div>
          <h1 className='text-4xl font-bold mb-3'>{manga.title}</h1>
          <span className='text-lg text-gray-400'>
            {manga.alternativeTitle || 'Không có tên phụ'}
          </span>

          <div className='flex items-center gap-4 my-8'>
            <div className='flex text-yellow-500 text-2xl'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star-half-o'></i>
            </div>
            <span className='text-gray-400'>1.029 Votes</span>
          </div>

          <p className='text-gray-300 text-lg leading-8 mb-10'>
            {manga.description || 'Đang cập nhật nội dung...'}
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10'>
            <ul className='space-y-5'>
              <li className='relative pl-6'>
                <span className='text-gray-400'>Tác giả:</span>{' '}
                <span className='ml-4 font-medium'>
                  {manga.author ?? 'Không rõ'}
                </span>
                <div className='absolute left-0 top-3 w-1.5 h-1.5 bg-gray-500 rounded-full'></div>
              </li>
              <li className='relative pl-6'>
                <span className='text-gray-400'>Thể loại:</span>{' '}
                <span className='ml-4 font-medium'>
                  {manga.genres?.join(', ') || 'Chưa có'}
                </span>
                <div className='absolute left-0 top-3 w-1.5 h-1.5 bg-gray-500 rounded-full'></div>
              </li>
              <li className='relative pl-6'>
                <span className='text-gray-400'>Trạng thái:</span>{' '}
                <span className='ml-4 font-medium'>
                  {manga.status || 'Đang cập nhật'}
                </span>
                <div className='absolute left-0 top-3 w-1.5 h-1.5 bg-gray-500 rounded-full'></div>
              </li>
            </ul>
            <ul className='space-y-5'>
              <li className='relative pl-6'>
                <span className='text-gray-400'>Chapter mới nhất:</span>{' '}
                <span className='ml-4 font-medium text-pink-400'>
                  {latestChapter?.number || 0}
                </span>
                <div className='absolute left-0 top-3 w-1.5 h-1.5 bg-gray-500 rounded-full'></div>
              </li>
              <li className='relative pl-6'>
                <span className='text-gray-400'>Lượt xem:</span>{' '}
                <span className='ml-4 font-medium'>
                  {manga.viewCount?.toLocaleString() ?? 0}
                </span>
                <div className='absolute left-0 top-3 w-1.5 h-1.5 bg-gray-500 rounded-full'></div>
              </li>
              <li className='relative pl-6'>
                <span className='text-gray-400'>Cập nhật:</span>{' '}
                <span className='ml-4 font-medium'>
                  {manga.updatedAt
                    ? new Date(manga.updatedAt).toLocaleDateString('vi-VN')
                    : 'Chưa rõ'}
                </span>
                <div className='absolute left-0 top-3 w-1.5 h-1.5 bg-gray-500 rounded-full'></div>
              </li>
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className='flex flex-wrap gap-4'>
          <button className='bg-pink-600 hover:bg-pink-700 text-white font-bold uppercase tracking-wider px-6 py-4 rounded-lg flex items-center gap-3 transition transform hover:scale-105'>
            <FaHeart /> Theo dõi
          </button>
          <Link
            to={`/read/${mangaId}/chapter/${firstChapter?.number}`}
            className='bg-gray-700 hover:bg-gray-600 text-white font-bold uppercase tracking-wider px-6 py-4 rounded-lg flex items-center gap-3 transition transform hover:scale-105'
          >
            <FaPlay /> Đọc từ đầu
          </Link>
          <Link
            to={`/read/${mangaId}/chapter/${latestChapter?.number}`}
            className='bg-pink-600 hover:bg-pink-700 text-white font-bold uppercase tracking-wider px-6 py-4 rounded-lg flex items-center gap-3 transition transform hover:scale-105'
          >
            <FaPlay /> Đọc chap mới nhất
          </Link>
        </div>
      </div>
    </div>
  )
}
