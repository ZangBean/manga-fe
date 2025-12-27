import { Link } from 'react-router-dom'

export default function UploaderFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-gray-900 border-t border-gray-800 py-5 px-6 md:px-10'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400'>
        <div>© {currentYear} Creator Studio. All rights reserved.</div>

        <div className='flex flex-wrap justify-center gap-6'>
          <Link
            to='/uploader/terms'
            className='hover:text-white transition-colors'
          >
            Điều khoản sử dụng
          </Link>
          <Link
            to='/uploader/privacy'
            className='hover:text-white transition-colors'
          >
            Chính sách bảo mật
          </Link>
          <Link
            to='/uploader/help'
            className='hover:text-white transition-colors'
          >
            Hỗ trợ creator
          </Link>
          <a
            href='https://example.com/contact'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white transition-colors'
          >
            Liên hệ
          </a>
        </div>
      </div>
    </footer>
  )
}
