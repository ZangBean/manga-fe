import { FaEye, FaCommentDots } from 'react-icons/fa'

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
    <div className='group'>
      <div className='relative rounded-xl overflow-hidden'>
        <img
          src={manga.coverImageUrl}
          alt={manga.title}
          className='w-full aspect-[3/4] object-cover'
        />

        <span className='absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-0.5 rounded'>
          {manga.currentChapter ?? '??'} / {manga.totalChapter ?? '??'}
        </span>

        <span className='absolute bottom-2 left-2 bg-black/60 text-white text-[11px] px-2 py-0.5 rounded'>
          {timeAgo(manga.updatedAt)}
        </span>

        <span className='absolute top-2 right-2 bg-black/60 text-white text-[11px] px-2 py-0.5 rounded flex items-center gap-1'>
          <FaCommentDots className='text-[10px]' />
          {manga.comments ?? 0}
        </span>

        <span className='absolute bottom-2 right-2 bg-black/60 text-white text-[11px] px-2 py-0.5 rounded flex items-center gap-1'>
          <FaEye className='text-[10px]' />
          {manga.viewCount ?? 0}
        </span>
      </div>

      <h5 className='mt-2 text-sm font-medium text-white line-clamp-2 hover:text-indigo-400 transition'>
        {manga.title}
      </h5>
    </div>
  )
}
