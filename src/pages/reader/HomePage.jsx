import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchTopMangas,
  fetchLatestMangas,
  fetchRandomMangas,
} from '@/stores/manga/manga.thunk'
import {
  selectTopMangas,
  selectTopStatus,
  selectLatestMangas,
  selectLatestStatus,
  selectRandomMangas,
  selectRandomStatus,
} from '@/stores/manga/manga.selector'

import MangaSlider from '@/components/manga/MangaSlider'
import MangaList from '@/components/manga/MangaList'
import MangaRandom from '@/components/manga/MangaRandom'
import MangaTop from '@/components/manga/MangaTop'
import GenreSuggestion from '@/components/genre/GenreSuggestion'
import LoadingGrid from '@/components/common/LoadingGrid'
import ErrorPage from '@/pages/errors/ErrorPage'

export default function HomePage() {
  const dispatch = useDispatch()

  const topMangas = useSelector(selectTopMangas)
  const topStatus = useSelector(selectTopStatus)

  const latestMangas = useSelector(selectLatestMangas)
  const latestStatus = useSelector(selectLatestStatus)

  const randomMangas = useSelector(selectRandomMangas)
  const randomStatus = useSelector(selectRandomStatus)

  const handleRandom = () => {
    dispatch(fetchRandomMangas())
  }

  useEffect(() => {
    if (topStatus === 'idle') dispatch(fetchTopMangas())
    if (latestStatus === 'idle') dispatch(fetchLatestMangas())
    if (randomStatus === 'idle') dispatch(fetchRandomMangas())
  }, [dispatch, topStatus, latestStatus, randomStatus])

  if (latestMangas === 'loading') return <LoadingGrid />
  if (latestStatus === 'failed') return <ErrorPage />

  return (
    <main className='container mx-auto px-4 py-10'>
      <MangaSlider mangaList={topMangas} />

      <div className='grid grid-cols-12 gap-6 mt-10'>
        <div className='col-span-12 lg:col-span-8'>
          <MangaList mangaList={latestMangas} />
        </div>
        <div className='col-span-12 lg:col-span-4'>
          <MangaTop />
        </div>
      </div>

      <div className='grid grid-cols-12 gap-6 mt-10'>
        <div className='col-span-12 lg:col-span-8'>
          <MangaRandom
            mangas={randomMangas}
            status={randomStatus}
            onRandom={handleRandom}
          />
        </div>
        <div className='col-span-12 lg:col-span-4'>
          <GenreSuggestion />
        </div>
      </div>
    </main>
  )
}
