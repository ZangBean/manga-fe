import { useState, useEffect, useCallback, memo } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { MdMenuBook } from 'react-icons/md'
import HotBadge from '@/components/layout/HotBadge'

const Slide = memo(function Slide({ topMangas, isHero, isActive }) {
  return (
    <div className='min-w-full h-full relative flex items-center'>
      <img
        src={topMangas.coverImageUrl}
        alt={topMangas.title}
        loading={isHero ? 'eager' : 'lazy'}
        decoding='async'
        className='absolute inset-0 w-full h-full object-cover'
      />

      <div
        className={`relative z-10 px-12 max-w-xl text-white translate-y-12 ${
          isActive ? '' : 'hero-content-inactive'
        }`}
      >
        <div className={isActive ? 'animate-hero-item delay-1' : ''}>
          <HotBadge className='mb-4' />
        </div>

        <h2
          className={`text-5xl font-extrabold mb-4 leading-tight hero-title ${
            isActive ? 'animate-hero-item delay-2' : ''
          }`}
        >
          {topMangas.title}
        </h2>

        <p
          className={`text-white text-lg leading-relaxed mb-8 line-clamp-3 font-medium hero-desc ${
            isActive ? 'animate-hero-item delay-3' : ''
          }`}
        >
          {topMangas.description}
        </p>

        <div className={isActive ? 'animate-hero-item delay-4' : ''}>
          <Link
            to={`/truyen-tranh/${topMangas._id}`}
            className='btn btn-gradient-slide inline-flex items-center gap-3'
          >
            Đọc ngay
            <MdMenuBook className='text-2xl' />
          </Link>
        </div>
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

  const goToSlide = (newIndex) => {
    setIndex(newIndex)
  }

  useEffect(() => {
    if (isHover || total === 0) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [isHover, total, next])

  if (!total) return null

  return (
    <div
      className='relative max-w-7xl mx-auto h-130'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className='h-full overflow-hidden rounded-md'>
        <div
          className='flex h-full transition-transform duration-700 will-change-transform'
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {mangaList.map((topMangas, i) => (
            <Slide
              key={topMangas._id || topMangas.id || i}
              topMangas={topMangas}
              isHero={i === 0}
              isActive={i === index}
            />
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className='group cursor-pointer absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rotate-45 bg-white/10 backdrop-blur flex items-center justify-center border-4 border-[#0b0c2a] hover:bg-white/20 transition-all duration-300'
        aria-label='Previous slide'
      >
        <FaChevronLeft className='-rotate-45 text-white text-2xl transition-transform duration-300 group-hover:scale-110' />
      </button>

      <button
        onClick={next}
        className='group cursor-pointer absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rotate-45 bg-white/10 backdrop-blur flex items-center justify-center border-4 border-[#0b0c2a] hover:bg-white/20 transition-all duration-300'
        aria-label='Next slide'
      >
        <FaChevronRight className='-rotate-45 text-white text-2xl transition-transform duration-300 group-hover:scale-110' />
      </button>

      <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20'>
        {mangaList.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2 h-2 cursor-pointer rounded-full transition-all duration-300 ${
              i === index
                ? 'bg-white w-6 scale-110 shadow-lg'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
