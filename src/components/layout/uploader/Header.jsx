import { Link } from 'react-router-dom'
import { FaUpload } from 'react-icons/fa'

export default function Header() {
  return (
    <header className='bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between'>
      <Link to='/uploader/dashboard' className='text-xl font-bold'>
        Creator Studio
      </Link>

      <div className='flex items-center gap-6'>
        <Link
          to='/uploader/upload-chapter'
          className='flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-md'
        >
          <FaUpload size={16} />
          Upload Chapter
        </Link>

        <div className='w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-semibold'>
          U
        </div>
      </div>
    </header>
  )
}
