import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMangaList } from '@/stores/manga/manga.thunk'
import {
  selectMangaList,
  selectMangaStatus,
} from '@/stores/manga/manga.selector'
import MangaCard from '@/components/manga/MangaCard'
import LoadingGrid from '@/components/common/LoadingGrid'
import ErrorPage from '@/pages/errors/ErrorPage'

export default function HomePage() {
  const dispatch = useDispatch()
  const mangaList = useSelector(selectMangaList)
  const status = useSelector(selectMangaStatus)

  useEffect(() => {
    if (status === 'idle') dispatch(fetchMangaList())
  }, [dispatch, status])

  if (status === 'loading') return <LoadingGrid />
  if (status === 'failed') return <ErrorPage />

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-100'>
      {/* Main content */}
      <main className='container mx-auto px-4 py-10'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-extrabold text-gray-800 mb-3'>
            Khám Phá Manga
          </h2>
          <p className='text-lg text-gray-600'>
            Hàng ngàn bộ truyện tranh mới nhất đang chờ bạn
          </p>
        </div>

        {/* Manga Grid */}
        {mangaList.length > 0 ? (
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
            {mangaList.map((manga) => (
              <MangaCard key={manga._id} manga={manga} />
            ))}
          </div>
        ) : (
          <div className='text-center py-20'>
            <div className='text-6xl mb-4'>📚</div>
            <p className='text-xl text-gray-500'>Chưa có manga nào</p>
          </div>
        )}
      </main>
    </div>
  )
}
