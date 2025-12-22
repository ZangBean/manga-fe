import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { TbArrowsRandom } from 'react-icons/tb'
import {
  FaRegFaceAngry,
  FaRegFaceGrimace,
  FaRegFaceKissWinkHeart,
  FaRegFaceMeh,
} from 'react-icons/fa6'
import MangaCard from '@/components/manga/MangaCard'
import memeDog from '@/assets/images/memeDog.jpg'
import memeCat from '@/assets/images/memeCat.jpg'
import memeNaruto from '@/assets/images/memeNaruto.jpg'
import memeCute from '@/assets/images/memeCute.jpg'

const DURATION = 2000
const INTERVAL = 80
const SPIN_THRESHOLD = 3

const MESSAGES = [
  { text: 'Làm gì khó tính vậy má', icon: <FaRegFaceAngry />, img: memeDog },
  { text: 'Quay ít thôi', icon: <FaRegFaceGrimace />, img: memeCat },
  {
    text: 'Bộ nào cũng hay, chọn đại đê',
    icon: <FaRegFaceKissWinkHeart />,
    img: memeCute,
  },
  { text: 'Quay vì đam mê à', icon: <FaRegFaceMeh />, img: memeNaruto },
]

export default function MangaRandom({ mangas = [], status, onRandom }) {
  const [display, setDisplay] = useState([])
  const [running, setRunning] = useState(false)
  const [modalMsg, setModalMsg] = useState(null)

  const timerRef = useRef(null)
  const startTimeRef = useRef(0)
  const spinCountRef = useRef(0)

  useEffect(() => {
    if (status === 'succeeded' && mangas.length) {
      const elapsed = Date.now() - startTimeRef.current
      const remain = Math.max(DURATION - elapsed, 0)

      setTimeout(() => {
        clearInterval(timerRef.current)
        setDisplay(mangas)
        setRunning(false)
      }, remain)
    }
  }, [status, mangas])

  useEffect(() => () => clearInterval(timerRef.current), [])

  const random = () => {
    if (running) return
    setRunning(true)
    startTimeRef.current = Date.now()
    spinCountRef.current += 1

    timerRef.current = setInterval(() => {
      setDisplay((prev) => [...prev].sort(() => Math.random() - 0.5))
    }, INTERVAL)

    onRandom?.()

    if (spinCountRef.current === SPIN_THRESHOLD) {
      const index = Math.floor(Math.random() * MESSAGES.length)
      setModalMsg(MESSAGES[index])
      spinCountRef.current = 0
    }
  }

  return (
    <section className='relative'>
      <h2 className='text-xl font-semibold text-white mb-4'>
        Truyện ngẫu nhiên
      </h2>

      <div
        className={`flex gap-4 min-h-60 ${
          running ? 'pointer-events-none' : ''
        }`}
      >
        {display.map((manga) => (
          <div key={manga._id} className='w-50'>
            <MangaCard manga={manga} />
          </div>
        ))}
      </div>

      <div className='mt-6 flex justify-center'>
        <Link
          to='#'
          onClick={(e) => {
            e.preventDefault()
            random()
          }}
          className={`btn btn-gradient-slide inline-flex items-center gap-3 ${
            running ? 'pointer-events-none opacity-50' : ''
          }`}
        >
          {running ? 'Đang quay' : 'Ngẫu nhiên'}
          <TbArrowsRandom
            className={`text-2xl ${running ? 'animate-spin' : ''}`}
          />
        </Link>
      </div>

      {modalMsg && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm'>
          <div className='w-90 rounded-3xl bg-zinc-900/90 p-6 text-white shadow-2xl ring-1 ring-white/10 animate-[scaleIn_.15s_ease-out]'>
            <div className='flex justify-center mb-4'>
              <img
                src={modalMsg.img}
                alt='Thông báo'
                className='w-52 h-52 object-contain'
              />
            </div>

            <div className='mb-4 text-center text-xl font-semibold'>
              Thông báo
            </div>

            <p className='mb-6 text-center text-base text-zinc-300 flex items-center justify-center gap-2'>
              {modalMsg.text} {modalMsg.icon}
            </p>
            <div className='flex justify-center'>
              <button
                className='rounded-xl bg-zinc-800 py-2 px-6 text-zinc-300 hover:bg-zinc-700 cursor-pointer'
                onClick={() => setModalMsg(null)}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
