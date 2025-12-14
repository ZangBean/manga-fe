import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMangaList } from '@/stores/manga/manga.thunk'
import {
  selectMangaList,
  selectMangaStatus,
} from '@/stores/manga/manga.selector'

import MangaSlider from '@/components/manga/MangaSlider'
import MangaList from '@/components/manga/MangaList'
import MangaRandom from '@/components/manga/MangaRandom'
import LoadingGrid from '@/components/common/LoadingGrid'
import ErrorPage from '@/pages/errors/ErrorPage'

export default function HomePage() {
  const dispatch = useDispatch()
  const mangaList = useSelector(selectMangaList)
  const status = useSelector(selectMangaStatus)

  const effectRan = useRef(false)

  useEffect(() => {
    if (!effectRan.current && status === 'idle') {
      dispatch(fetchMangaList())
      effectRan.current = true
    }
  }, [dispatch, status])

  if (status === 'loading') return <LoadingGrid />
  if (status === 'failed') return <ErrorPage />

  return (
    <main className='container mx-auto px-4 py-10'>
      <MangaSlider mangaList={mangaList} />

      <div className='grid grid-cols-12 gap-6 mt-10'>
        {/* Left: 5 truyện 1 hàng */}
        <div className='col-span-12 lg:col-span-8'>
          <MangaList mangaList={mangaList} />
        </div>

        {/* Right: Top truyện */}
        <div className='col-span-12 lg:col-span-4'>
          <section>
            <h3 className='text-lg font-semibold text-white mb-2'>
              Top truyện
            </h3>
            <div className='flex gap-2 mb-4'>
              {/* Nút filter: Ngày, Tuần, Tháng, Năm */}
            </div>
            <div className='space-y-3'>
              {/* Component TopMangaCard sẽ được render ở đây */}
            </div>
          </section>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-6 mt-10'>
        {/* Left: List truyện random */}
        <div className='col-span-12 lg:col-span-8'>
          <section>
            <h2 className='text-xl font-semibold text-white mb-4'>
              Truyện ngẫu nhiên
            </h2>
            {/* <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4'> */}
            <MangaRandom mangaList={mangaList} />
            {/* </div> */}
          </section>
        </div>

        {/* Right: Thể loại gợi ý */}
        <div className='col-span-12 lg:col-span-4'>
          <section className='space-y-4'>
            <h3 className='text-lg font-semibold text-white mb-2'>
              Thể loại gợi ý hôm nay
            </h3>
            <div className='grid grid-cols-2 gap-3'>
              {/* Component GenreCard hoặc list thể loại */}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
