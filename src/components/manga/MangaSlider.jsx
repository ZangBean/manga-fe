import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function MangaSlider({ mangaList = [] }) {
  const [index, setIndex] = useState(0)
  const [isHover, setIsHover] = useState(false)
  const total = mangaList.length

  const next = () => setIndex((i) => (i + 1) % total)
  const prev = () => setIndex((i) => (i - 1 + total) % total)

  useEffect(() => {
    if (isHover || total === 0) return
    const t = setInterval(next, 4000)
    return () => clearInterval(t)
  }, [isHover, total])

  if (!mangaList.length) return null

  return (
    <div
      className='relative max-w-7xl mx-auto h-[520px]'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className='h-full overflow-hidden rounded-md'>
        <div
          className='flex h-full transition-transform duration-700'
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {mangaList.map((manga, i) => (
            <div
              key={i}
              className='min-w-full h-full bg-cover bg-center relative flex items-center'
              style={{ backgroundImage: `url(${manga.coverImageUrl})` }}
            >
              <div className='relative z-10 px-12 max-w-xl text-white translate-y-12'>
                <span className='inline-block mb-4 px-3 py-1 text-sm bg-red-500/90'>
                  {manga.category || 'Adventure'}
                </span>
                <h2 className='text-4xl font-extrabold mb-4'>{manga.title}</h2>
                <p className='text-gray-200 mb-6'>{manga.description}</p>
                <button className='flex items-center gap-2 bg-red-600 px-6 py-3 font-bold hover:bg-red-700'>
                  WATCH NOW <FaChevronRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className='absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rotate-45 bg-white/10 backdrop-blur flex items-center justify-center cursor-pointer'
        style={{ border: '4px solid #0b0c2a' }}
      >
        <FaChevronLeft className='-rotate-45 text-white' />
      </button>

      <button
        onClick={next}
        className='absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rotate-45 bg-white/10 backdrop-blur flex items-center justify-center cursor-pointer'
        style={{ border: '4px solid #0b0c2a' }}
      >
        <FaChevronRight className='-rotate-45 text-white' />
      </button>
    </div>
  )
}
