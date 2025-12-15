import { useState, useEffect, useCallback, memo } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Slide = memo(function Slide({ manga, isHero }) {
  return (
    <div className='min-w-full h-full relative flex items-center'>
      <img
        src={manga.coverImageUrl}
        alt={manga.title}
        loading={isHero ? 'eager' : 'lazy'}
        decoding='async'
        className='absolute inset-0 w-full h-full object-cover'
      />

      <div className='relative z-10 px-12 max-w-xl text-white translate-y-12'>
        <span className='inline-block mb-4 px-3 py-1 text-sm bg-red-500/90'>
          {manga.category || 'Adventure'}
        </span>
        <h2 className='text-4xl font-extrabold mb-4'>{manga.title}</h2>
        <p className='text-gray-200 mb-6 line-clamp-3'>{manga.description}</p>
        <button className='flex items-center gap-2 bg-red-600 px-6 py-3 font-bold hover:bg-red-700'>
          WATCH NOW <FaChevronRight />
        </button>
      </div>
    </div>
  )
})

export default function MangaSlider({ mangaList = [] }) {
  const [index, setIndex] = useState(0)
  const [isHover, setIsHover] = useState(false)
  const total = mangaList.length

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total)
  }, [total])

  useEffect(() => {
    if (isHover || total === 0) return
    const t = setInterval(next, 4000)
    return () => clearInterval(t)
  }, [isHover, total, next])

  if (!total) return null

  return (
    <div
      className='relative max-w-7xl mx-auto h-[520px]'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className='h-full overflow-hidden rounded-md'>
        <div
          className='flex h-full transition-transform duration-700 will-change-transform'
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {mangaList.map((manga, i) => (
            <Slide key={manga.id || i} manga={manga} isHero={i === 0} />
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className='absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rotate-45 bg-white/10 backdrop-blur flex items-center justify-center'
        style={{ border: '4px solid #0b0c2a' }}
      >
        <FaChevronLeft className='-rotate-45 text-white' />
      </button>

      <button
        onClick={next}
        className='absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rotate-45 bg-white/10 backdrop-blur flex items-center justify-center'
        style={{ border: '4px solid #0b0c2a' }}
      >
        <FaChevronRight className='-rotate-45 text-white' />
      </button>
    </div>
  )
}
