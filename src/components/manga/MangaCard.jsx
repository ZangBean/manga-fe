import { Link } from 'react-router-dom'
import {
  FaEye,
  FaCommentDots,
  FaCalendarAlt,
  FaStar,
  FaClock,
  FaPen,
  FaTags,
  FaUsers,
} from 'react-icons/fa'

const timeAgo = (date) => {
  if (!date) return 'Vừa xong'
  const diff = Math.floor((Date.now() - new Date(date)) / 1000)
  if (diff < 60) return 'Vừa xong'
  const m = Math.floor(diff / 60)
  if (m < 60) return `${m} phút trước`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h} giờ trước`
  const d = Math.floor(h / 24)
  if (d < 7) return `${d} ngày trước`
  const w = Math.floor(d / 7)
  if (w < 4) return `${w} tuần trước`
  const mo = Math.floor(d / 30)
  if (mo < 12) return `${mo} tháng trước`
  const y = Math.floor(d / 365)
  return `${y} năm trước`
}

export default function MangaCard({ manga }) {
  return (
    <div className='group relative block'>
      <Link to={`/truyen-tranh/${manga._id}`} className='block'>
        <div className='relative rounded-md overflow-hidden'>
          <img
            src={manga.coverImageUrl}
            alt={manga.title}
            loading='lazy'
            decoding='async'
            className='w-full aspect-3/4 object-cover transition-transform duration-500'
          />
          <span className='absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-0.5 rounded font-medium z-10'>
            {manga.chapterCount ?? '??'} / {manga.totalChapter ?? '??'}
          </span>

          <span className='absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[11px] px-2 py-0.5 rounded z-10'>
            {timeAgo(manga.createdAt)}
          </span>

          <span className='absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white text-[11px] px-2 py-0.5 rounded flex items-center gap-1 z-10'>
            <FaCommentDots className='text-[10px]' />
            {manga.comments ?? 0}
          </span>

          <span className='absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-white text-[11px] px-2 py-0.5 rounded flex items-center gap-1 z-10'>
            <FaEye className='text-[10px]' />
            {manga.viewCount ?? 0}
          </span>
          <div
            className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
                transition-opacity duration-500 ease-out 
                flex items-center justify-center z-20 pointer-events-none'
          >
            <div
              className='w-10 h-10 md:w-12 md:h-12 
                  border-2 border-white rounded-full 
                  bg-transparent 
                  flex items-center justify-center 
                  shadow-md 
                  transform scale-90 group-hover:scale-100 
                  transition-transform duration-500'
            >
              <FaEye className='text-xl md:text-2xl text-white' />
            </div>
          </div>
        </div>
        <h5 className='mt-2 text-sm font-medium text-white line-clamp-2 group-hover:opacity-70 transition-all duration-300 ease-out'>
          {manga.title}
        </h5>
      </Link>

      {/* TOOLTIP CHI TIẾT BÊN PHẢI */}
      <div
        className='pointer-events-none absolute left-full top-0 ml-4 w-64 
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                      transition-all duration-300 ease-out z-50'
      >
        <div
          className='absolute left-0 top-6 -translate-x-full 
                        w-0 h-0 
                        border-t-8 border-b-8 border-r-8 
                        border-t-transparent border-b-transparent border-r-white'
        />

        <div className='bg-white rounded-md shadow-2xl overflow-hidden text-sm'>
          <div className='p-4 pb-2'>
            <h3 className='text-lg font-bold text-black mb-2 line-clamp-2'>
              {manga.title}
            </h3>

            <div className='flex items-center gap-3 flex-wrap text-sm'>
              <span className='flex items-center gap-1 text-yellow-500 font-medium'>
                <FaStar className='text-xs' /> {manga.rating ?? '?.?'}
              </span>
              <span className='flex items-center gap-1 text-gray-600'>
                <FaClock className='text-xs' /> {manga.chapterCount ?? '??'}/
                {manga.totalChapter ?? '??'}
              </span>
              <span className='flex items-center gap-1 text-gray-600'>
                <FaCalendarAlt className='text-xs' /> {manga.year ?? '????'}
              </span>
            </div>
          </div>

          <div className='px-4 pb-2'>
            <p className='text-gray-600 text-xs line-clamp-3 italic'>
              {manga.description || 'Đang cập nhật mô tả...'}
            </p>
          </div>

          <div className='px-4 pb-4 space-y-2 text-sm'>
            {/* Tác giả */}
            <div className='flex items-center gap-2 text-gray-700 whitespace-nowrap'>
              <FaPen className='text-blue-500 text-sm shrink-0' />
              <span className='text-gray-500 shrink-0'>Tác giả:</span>
              <span className='font-medium text-gray-800 truncate min-w-0'>
                {manga.author || 'Đang cập nhật'}
              </span>
            </div>

            {/* Thể loại */}
            <div className='flex items-center gap-2 text-gray-700 whitespace-nowrap'>
              <FaTags className='text-yellow-500 text-sm shrink-0' />
              <span className='text-gray-500 shrink-0'>Thể loại:</span>
              <span className='font-medium text-gray-800 truncate min-w-0'>
                {manga.genres?.join(', ') || 'Đang cập nhật'}
              </span>
            </div>

            {/* Nhóm dịch */}
            <div className='flex items-center gap-2 text-gray-700 whitespace-nowrap'>
              <FaUsers className='text-purple-500 text-sm shrink-0' />
              <span className='text-gray-500 shrink-0'>Nhóm dịch:</span>
              <span className='font-medium text-gray-800 truncate min-w-0'>
                {manga.translationGroup || 'Đang cập nhật'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
