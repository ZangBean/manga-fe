import { FaEye, FaCommentDots } from 'react-icons/fa'

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
          {manga.updatedAt ?? 'Vừa xong'}
        </span>

        <span className='absolute top-2 right-2 bg-black/60 text-white text-[11px] px-2 py-0.5 rounded flex items-center gap-1'>
          <FaCommentDots className='text-[10px]' />
          {manga.comments ?? 0}
        </span>

        <span className='absolute bottom-2 right-2 bg-black/60 text-white text-[11px] px-2 py-0.5 rounded flex items-center gap-1'>
          <FaEye className='text-[10px]' />
          {manga.views ?? 0}
        </span>
      </div>

      <h5 className='mt-2 text-sm font-medium text-white line-clamp-2 hover:text-indigo-400 transition'>
        {manga.title}
      </h5>
    </div>
  )
}
