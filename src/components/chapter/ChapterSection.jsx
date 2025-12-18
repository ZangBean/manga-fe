import { Link } from 'react-router-dom'
import { FaCalendarAlt, FaClock, FaEye } from 'react-icons/fa'

export default function ChapterSection({
  chapters,
  mangaId,
  latestChapterNumber,
}) {
  return (
    <div className='mb-20'>
      <h3 className='text-3xl font-bold text-white flex items-center gap-3 mb-8'>
        <FaCalendarAlt /> Danh sách Chapter ({chapters.length})
      </h3>

      <div className='bg-[#1d1e39] rounded-xl overflow-hidden shadow-xl'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-6 max-h-155 overflow-y-auto scrollbar-thin scrollbar-thumb-pink-600 scrollbar-track-[#11101b] hover:scrollbar-thumb-pink-500'>
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              to={`/read/${mangaId}/chapter/${chapter.number}`}
              className='group bg-[#11101b] hover:bg-pink-600/20 border border-gray-700 hover:border-pink-500 rounded-lg p-5 transition-all duration-300 transform hover:-translate-y-1'
            >
              <div className='flex justify-between items-start mb-2'>
                <h4 className='font-bold text-white group-hover:text-pink-400 transition text-lg'>
                  Chapter {chapter.number}
                </h4>
                {chapter.number === latestChapterNumber && (
                  <span className='bg-pink-600 text-white text-xs px-3 py-1 rounded-full animate-pulse'>
                    Mới
                  </span>
                )}
              </div>
              <p className='text-gray-400 text-sm line-clamp-2 mb-3'>
                {chapter.title || `Chapter ${chapter.number}`}
              </p>
              <div className='flex items-center justify-between text-sm'>
                <span className='text-gray-500 flex items-center gap-1'>
                  <FaClock />{' '}
                  {new Date(chapter.updatedAt).toLocaleDateString('vi-VN')}
                </span>
                <span className='text-gray-500 flex items-center gap-1'>
                  <FaEye /> {chapter.views.toLocaleString()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
