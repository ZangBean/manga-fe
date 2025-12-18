import { Link } from 'react-router-dom'

export default function Breadcrumb({ title }) {
  return (
    <div className='py-8 bg-[#11101b] border-b border-gray-800'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center text-sm'>
          <Link to='/' className='text-gray-400 hover:text-pink-500 transition'>
            <i className='fa fa-home mr-2'></i> Trang chủ
          </Link>
          <span className='mx-3 text-gray-600'>/</span>
          <span className='text-pink-500'>{title}</span>
        </div>
      </div>
    </div>
  )
}
