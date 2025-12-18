import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMangaList } from '@/stores/manga/manga.thunk'
import {
  selectMangaList,
  selectMangaStatus,
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
  const mangaList = useSelector(selectMangaList)
  const status = useSelector(selectMangaStatus)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMangaList())
    }
  }, [dispatch, status])

  if (status === 'loading') return <LoadingGrid />
  if (status === 'failed') return <ErrorPage />

  return (
    <main className='container mx-auto px-4 py-10'>
      <MangaSlider mangaList={mangaList} />

      <div className='grid grid-cols-12 gap-6 mt-10'>
        <div className='col-span-12 lg:col-span-8'>
          <MangaList mangaList={mangaList} />
        </div>
        <div className='col-span-12 lg:col-span-4'>
          <MangaTop />
        </div>
      </div>

      <div className='grid grid-cols-12 gap-6 mt-10'>
        <div className='col-span-12 lg:col-span-8'>
          <MangaRandom mangaList={mangaList} />
        </div>
        <div className='col-span-12 lg:col-span-4'>
          <GenreSuggestion />
        </div>
      </div>
    </main>
  )
}
