import { useState, useRef, useEffect } from 'react'
import MangaCard from '@/components/manga/MangaCard'

export default function MangaRandom({ mangaList }) {
  const slotRefs = Array.from({ length: 5 }, () => useRef())
  const [spinning, setSpinning] = useState(false)
  const [shuffledSlots, setShuffledSlots] = useState([])

  // Shuffle 1 mảng
  const shuffleArray = (arr) => {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
  }

  // Tạo danh sách cho 5 slot, mỗi slot là shuffle riêng và lặp lại 2 lần để scroll mượt
  useEffect(() => {
    if (mangaList.length >= 5) {
      const slots = Array.from({ length: 5 }, () => {
        const shuffled = shuffleArray(mangaList)
        return [...shuffled, ...shuffled] // lặp lại 2 lần để scroll mượt
      })
      setShuffledSlots(slots)
    }
  }, [mangaList])

  const spin = () => {
    if (spinning || mangaList.length < 5) return
    setSpinning(true)

    const finalResult = shuffleArray(mangaList).slice(0, 5)
    const cardHeight = 200

    slotRefs.forEach((ref, idx) => {
      const slot = ref.current
      if (!slot) return

      const totalItems = mangaList.length
      const extraLoops = 20 + idx * 5
      let count = 0

      slot.style.transition = ''
      slot.style.transform = `translateY(0px)`

      const interval = setInterval(() => {
        const offset = -((count % totalItems) + totalItems) * cardHeight
        slot.style.transform = `translateY(${offset}px)`
        count++
        if (count >= extraLoops) {
          clearInterval(interval)
          const finalIndex = mangaList.indexOf(finalResult[idx])
          const finalOffset = -finalIndex * cardHeight
          slot.style.transition = 'transform 0.6s ease-out'
          slot.style.transform = `translateY(${finalOffset}px)`
          if (idx === slotRefs.length - 1) {
            setTimeout(() => setSpinning(false), 700)
          }
        }
      }, 60)
    })
  }

  return (
    <section>
      <h2 className='text-xl font-semibold text-white mb-4'>
        Truyện ngẫu nhiên
      </h2>
      <div className='flex flex-col items-center space-y-4'>
        <div className='flex gap-6 overflow-hidden h-[200px]'>
          {slotRefs.map((ref, idx) => {
            const slotManga = shuffledSlots[idx] || []
            return (
              <div key={idx} className='overflow-hidden'>
                <ul ref={ref} className='flex flex-col'>
                  {slotManga.map((manga, i) => (
                    <li key={i} className='h-[200px]'>
                      {manga && <MangaCard manga={manga} />}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        <button
          onClick={spin}
          disabled={spinning || mangaList.length < 5}
          className={`bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors ${
            spinning || mangaList.length < 5
              ? 'opacity-50 cursor-not-allowed'
              : ''
          }`}
        >
          Quay truyện
        </button>
      </div>
    </section>
  )
}
