// pages/uploader/ChapterUploadPage.jsx
import { useState } from 'react'

export default function ChapterUploadPage() {
  const [chapterNumber, setChapterNumber] = useState('')
  const [title, setTitle] = useState('')
  const [files, setFiles] = useState([])

  const handleFileChange = (e) => {
    setFiles([...e.target.files])
  }

  return (
    <div className='p-4 md:p-8 max-w-5xl mx-auto'>
      <h1 className='text-3xl font-bold mb-8'>Upload Chapter Mới</h1>

      <div className='bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-700 space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-medium mb-2'>Truyện</label>
            <select className='w-full bg-gray-900 border border-gray-700 rounded-lg p-3'>
              <option>Chọn truyện...</option>
              {/* options từ API */}
            </select>
          </div>

          <div>
            <label className='block text-sm font-medium mb-2'>Số chapter</label>
            <input
              type='number'
              value={chapterNumber}
              onChange={(e) => setChapterNumber(e.target.value)}
              className='w-full bg-gray-900 border border-gray-700 rounded-lg p-3'
              placeholder='Ví dụ: 45'
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>
            Tiêu đề chapter (tùy chọn)
          </label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full bg-gray-900 border border-gray-700 rounded-lg p-3'
            placeholder='Ví dụ: Kết thúc arc đầu tiên'
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>
            Upload hình ảnh (kéo thả hoặc chọn nhiều file)
          </label>
          <div className='border-2 border-dashed border-gray-600 rounded-xl p-8 text-center'>
            <input
              type='file'
              multiple
              accept='image/*'
              onChange={handleFileChange}
              className='hidden'
              id='chapter-files'
            />
            <label htmlFor='chapter-files' className='cursor-pointer'>
              <p className='text-lg mb-2'>Kéo thả hoặc click để chọn file</p>
              <p className='text-sm text-gray-500'>
                PNG, JPG, WebP • Tối đa 100MB/chapter
              </p>
            </label>
            {files.length > 0 && (
              <div className='mt-6 text-left'>
                <p className='text-emerald-400'>Đã chọn {files.length} file</p>
              </div>
            )}
          </div>
        </div>

        <div className='flex justify-end gap-4 pt-6'>
          <button className='px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium'>
            Lưu nháp
          </button>
          <button className='px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-medium shadow-lg'>
            Đăng chapter
          </button>
        </div>
      </div>
    </div>
  )
}
