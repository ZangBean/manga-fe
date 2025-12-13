import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMangaList } from '@/stores/manga/manga.thunk'
import {
  selectMangaList,
  selectMangaStatus,
} from '@/stores/manga/manga.selector'

import MangaSlider from '@/components/manga/MangaSlider'
import MangaList from '@/components/manga/MangaList'
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
      <MangaList mangaList={mangaList} />
    </main>
  )
}
