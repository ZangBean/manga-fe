// src/pages/ReaderPage.jsx
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  FaChevronLeft,
  FaChevronRight,
  FaList,
  FaArrowsAltV,
  FaBook,
} from 'react-icons/fa'
import Breadcrumb from '@/components/layout/Breadcrumb'
import CommentsSection from '@/components/comment/CommentsSection' // Component comment bạn đã có sẵn

// Giả lập fetch ảnh chapter
const fetchChapterImages = async (slug, chapterNumber) => {
  return Array.from({ length: 20 }, (_, i) => ({
    page: i + 1,
    imageUrl: `https://via.placeholder.com/800x1200/1a1a2e/ffffff?text=Trang+${
      i + 1
    }+-+Chap+${chapterNumber}`,
  }))
}

export default function ReaderPage() {
  const { slug, chapter } = useParams()
  const chapterNumber = parseInt(chapter)

  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showChapterList, setShowChapterList] = useState(false)
  const [mangaTitle, setMangaTitle] = useState('Đang tải tên truyện...')

  // Chế độ đọc
  const [readMode, setReadMode] = useState('vertical') // 'vertical' hoặc 'horizontal'
  const [currentPage, setCurrentPage] = useState(0) // cho chế độ ngang

  // Danh sách chapter giả lập (thay bằng dữ liệu thật từ API hoặc Redux)
  const allChapters = Array.from({ length: 1100 }, (_, i) => i + 1).reverse()
  const prevChapter = chapterNumber > 1 ? chapterNumber - 1 : null
  const nextChapter = chapterNumber < allChapters[0] ? chapterNumber + 1 : null

  useEffect(() => {
    const loadChapter = async () => {
      try {
        setLoading(true)
        const data = await fetchChapterImages(slug, chapterNumber)
        setImages(data)
        setError(null)
        setCurrentPage(0)
      } catch (err) {
        setError('Không tải được chapter này')
      } finally {
        setLoading(false)
      }
    }

    loadChapter()
    window.scrollTo(0, 0)
  }, [slug, chapter])

  // Breadcrumb
  const breadcrumbItems = [
    { label: 'Trang chủ', link: '/' },
    { label: mangaTitle, link: `/truyen-tranh/${slug}` },
    { label: `Chapter ${chapterNumber}`, active: true },
  ]

  if (loading)
    return (
      <div className='flex items-center justify-center min-h-screen bg-black text-white text-xl'>
        Đang tải chapter {chapterNumber}...
      </div>
    )
  if (error)
    return (
      <div className='flex items-center justify-center min-h-screen bg-black text-red-500 text-xl'>
        {error}
      </div>
    )

  const totalPages = images.length

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      {/* Thanh điều hướng sticky */}
      <div className='bg-[#16213e] border-b border-gray-800 py-4 sticky top-0 z-40 shadow-md'>
        <div className='container mx-auto px-4 flex flex-wrap items-center justify-between gap-4'>
          <Link
            to={`/truyen-tranh/${slug}`}
            className='text-pink-400 hover:text-pink-300 font-medium flex items-center gap-2'
          >
            ← Quay về trang truyện
          </Link>

          <div className='flex items-center gap-4'>
            <h1 className='text-xl font-bold'>Chapter {chapterNumber}</h1>

            {/* Chuyển chế độ đọc */}
            <div className='flex bg-gray-800 rounded-lg overflow-hidden'>
              <button
                onClick={() => setReadMode('vertical')}
                className={`px-4 py-2 flex items-center gap-2 transition ${
                  readMode === 'vertical'
                    ? 'bg-pink-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                title='Đọc dọc'
              >
                <FaArrowsAltV /> Dọc
              </button>
              <button
                onClick={() => setReadMode('horizontal')}
                className={`px-4 py-2 flex items-center gap-2 transition ${
                  readMode === 'horizontal'
                    ? 'bg-pink-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                title='Đọc ngang'
              >
                <FaBook /> Ngang
              </button>
            </div>

            <button
              onClick={() => setShowChapterList(true)}
              className='flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg transition'
            >
              <FaList /> Chapter
            </button>
          </div>
        </div>
      </div>

      {/* Nội dung đọc truyện */}
      <div className='bg-black py-8'>
        {readMode === 'vertical' ? (
          // Chế độ dọc
          <div className='max-w-4xl mx-auto px-4'>
            {images.map((img) => (
              <div key={img.page} className='mb-8 flex justify-center'>
                <img
                  src={img.imageUrl}
                  alt={`Trang ${img.page}`}
                  className='max-w-full h-auto rounded-lg shadow-2xl border border-gray-800'
                  loading='lazy'
                />
              </div>
            ))}
          </div>
        ) : (
          // Chế độ ngang
          <div className='flex items-center justify-center min-h-screen px-4'>
            <div className='relative max-w-5xl w-full'>
              {currentPage > 0 && (
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full z-10 transition'
                >
                  <FaChevronLeft size={30} />
                </button>
              )}

              <div className='flex justify-center'>
                <img
                  src={images[currentPage]?.imageUrl}
                  alt={`Trang ${currentPage + 1}`}
                  className='max-w-full max-h-screen object-contain rounded-lg shadow-2xl'
                />
              </div>

              {currentPage < totalPages - 1 && (
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full z-10 transition'
                >
                  <FaChevronRight size={30} />
                </button>
              )}

              <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg'>
                Trang {currentPage + 1} / {totalPages}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* === PHẦN BÌNH LUẬN (COMMENT) === */}
      <section className='bg-[#0f0f1a] py-12'>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl font-bold text-white mb-8 text-center'>
            Bình luận Chapter {chapterNumber}
          </h2>
          {/* Re-use component CommentsSection bạn đã có ở trang chi tiết */}
          <CommentsSection
          // Nếu component cần prop để phân biệt comment theo chapter
          // chapterId={`${slug}-chapter-${chapterNumber}`}
          // hoặc nếu backend hỗ trợ comment theo chapter riêng
          />
        </div>
      </section>

      {/* Thanh chuyển chapter fixed bottom */}
      <div className='fixed bottom-0 left-0 right-0 bg-[#16213e] border-t border-gray-800 py-4 z-40 shadow-2xl'>
        <div className='container mx-auto px-4 flex items-center justify-between'>
          {prevChapter ? (
            <Link
              to={`/truyen-tranh/${slug}/chapter-${prevChapter}`}
              className='flex items-center gap-3 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition transform hover:scale-105'
            >
              <FaChevronLeft /> Chapter trước
            </Link>
          ) : (
            <span className='text-gray-500 px-6 py-3'>
              Không có chapter trước
            </span>
          )}

          <button
            onClick={() => setShowChapterList(true)}
            className='flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition'
          >
            <FaList /> Chọn chapter
          </button>

          {nextChapter ? (
            <Link
              to={`/truyen-tranh/${slug}/chapter-${nextChapter}`}
              className='flex items-center gap-3 bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg transition transform hover:scale-105'
            >
              Chapter sau <FaChevronRight />
            </Link>
          ) : (
            <span className='text-gray-500 px-6 py-3'>Chưa có chapter mới</span>
          )}
        </div>
      </div>

      {/* Modal chọn chapter */}
      {showChapterList && (
        <div
          className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center'
          onClick={() => setShowChapterList(false)}
        >
          <div
            className='bg-[#16213e] rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto'
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className='text-2xl font-bold mb-6 text-center'>
              Chọn Chapter
            </h2>
            <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3'>
              {allChapters.map((num) => (
                <Link
                  key={num}
                  to={`/truyen-tranh/${slug}/chapter-${num}`}
                  onClick={() => setShowChapterList(false)}
                  className={`py-3 text-center rounded-lg transition text-sm font-medium ${
                    num === chapterNumber
                      ? 'bg-pink-600 text-white'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  {num}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
