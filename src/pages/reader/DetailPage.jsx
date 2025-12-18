import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMangaById } from '@/stores/manga/manga.thunk'
import { clearSelected } from '@/stores/manga/manga.slice'
import {
  selectSelectedManga,
  selectSelectedMangaStatus,
  selectMangaError,
} from '@/stores/manga/manga.selector'

import Breadcrumb from '@/components/layout/Breadcrumb'
import MangaHeader from '@/components/manga/MangaHeader'
import ChapterSection from '@/components/chapter/ChapterSection'
import CommentsSection from '@/components/comment/CommentsSection'
import GenreRecommend from '@/components/genre/GenreRecommend'

export default function DetailPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const manga = useSelector(selectSelectedManga)
  const status = useSelector(selectSelectedMangaStatus)
  const error = useSelector(selectMangaError)

  const isLoading = status === 'loading'
  const isError = status === 'failed'

  useEffect(() => {
    if (id) dispatch(fetchMangaById(id))
    return () => dispatch(clearSelected())
  }, [id, dispatch])

  const chapters =
    manga?.chapters ||
    Array.from({ length: 29 }, (_, i) => ({
      id: i + 1,
      number: i + 1,
      title: `Chapter ${i + 1}: Tiêu đề chương hấp dẫn và kịch tính`,
      updatedAt: new Date(Date.now() - i * 24 * 60 * 60 * 1000),
      views: Math.floor(Math.random() * 50000) + 5000,
    })).reverse()

  const latestChapter = chapters[0]
  const firstChapter = chapters[chapters.length - 1]

  if (isLoading)
    return (
      <div className='flex items-center justify-center min-h-screen bg-[#0f0f1a] text-white text-xl'>
        Đang tải...
      </div>
    )
  if (isError)
    return (
      <div className='flex items-center justify-center min-h-screen bg-[#0f0f1a] text-red-500 text-xl text-center'>
        {error || 'Không thể tải thông tin truyện.'}
      </div>
    )
  if (!manga)
    return (
      <div className='flex items-center justify-center min-h-screen bg-[#0f0f1a] text-white text-xl'>
        Không tìm thấy truyện
      </div>
    )

  return (
    <>
      <Breadcrumb title={manga.title} />

      <section className='py-16 bg-[#0f0f1a]'>
        <div className='container mx-auto px-4'>
          <MangaHeader
            manga={manga}
            mangaId={id}
            latestChapter={latestChapter}
            firstChapter={firstChapter}
          />

          <ChapterSection
            chapters={chapters}
            mangaId={id}
            latestChapterNumber={latestChapter?.number}
          />

          <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
            <CommentsSection />
            <GenreRecommend />
          </div>
        </div>
      </section>
    </>
  )
}
