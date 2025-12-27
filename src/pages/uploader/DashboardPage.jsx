// src/pages/uploader/DashboardPage.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaBook,
  FaUpload,
  FaChartLine,
  FaUsers,
  FaComments,
  FaEye,
} from 'react-icons/fa'

export default function DashboardPage() {
  // Dữ liệu giả lập - sau này fetch từ API
  const [stats, setStats] = useState({
    totalSeries: 5,
    totalChapters: 42,
    totalViews: 124800,
    newFollowers: 320,
    recentComments: 18,
    earnings: 0, // nếu có monetization
  })

  // Giả lập fetch data khi mount
  useEffect(() => {
    // Thay bằng API call thực tế sau
    // const fetchStats = async () => { ... }
    // fetchStats();
  }, [])

  const quickStats = [
    {
      title: 'Tổng truyện',
      value: stats.totalSeries,
      icon: FaBook,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Tổng chapter',
      value: stats.totalChapters,
      icon: FaBook,
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      title: 'Tổng lượt xem',
      value: stats.totalViews.toLocaleString(),
      icon: FaEye,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Follower mới',
      value: stats.newFollowers,
      icon: FaUsers,
      color: 'from-purple-500 to-pink-600',
    },
  ]

  return (
    <div className='space-y-8'>
      {/* Header chào mừng */}
      <div>
        <h1 className='text-3xl font-bold text-white'>
          Chào mừng quay lại, Creator!
        </h1>
        <p className='text-gray-400 mt-2'>
          Đây là tổng quan hoạt động của bạn hôm nay
        </p>
      </div>

      {/* Quick Stats Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {quickStats.map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 shadow-lg hover:scale-[1.02] transition-transform duration-300`}
          >
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-white/80 text-sm font-medium'>
                  {stat.title}
                </p>
                <p className='text-3xl font-bold text-white mt-1'>
                  {stat.value}
                </p>
              </div>
              <stat.icon className='text-white/70 w-10 h-10' />
            </div>
          </div>
        ))}
      </div>

      {/* Hành động nhanh */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-gray-800 rounded-xl p-6 border border-gray-700'>
          <h3 className='text-xl font-semibold mb-4 flex items-center gap-2'>
            <FaUpload className='text-emerald-400' />
            Bắt đầu ngay
          </h3>
          <div className='space-y-4'>
            <Link
              to='/uploader/upload-chapter'
              className='block bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg text-center transition-colors'
            >
              Upload Chapter Mới
            </Link>
            <Link
              to='/uploader/series/new'
              className='block bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg text-center transition-colors'
            >
              Tạo Truyện Mới
            </Link>
          </div>
        </div>

        {/* Truyện nổi bật / Gần đây */}
        <div className='bg-gray-800 rounded-xl p-6 border border-gray-700'>
          <h3 className='text-xl font-semibold mb-4 flex items-center gap-2'>
            <FaChartLine className='text-blue-400' />
            Hoạt động gần đây
          </h3>
          <div className='space-y-3 text-gray-300'>
            <p>• Chapter 45 "Kết thúc arc" nhận được 1.2k views trong 24h</p>
            <p>• 12 comment mới từ độc giả</p>
            <p>• +45 follower mới tuần này</p>
            <Link
              to='/uploader/analytics'
              className='text-emerald-400 hover:underline mt-2 inline-block'
            >
              Xem thống kê chi tiết →
            </Link>
          </div>
        </div>
      </div>

      {/* Danh sách truyện của tôi (preview) */}
      <div className='bg-gray-800 rounded-xl p-6 border border-gray-700'>
        <div className='flex items-center justify-between mb-6'>
          <h3 className='text-xl font-semibold'>Truyện của bạn</h3>
          <Link
            to='/uploader/series'
            className='text-emerald-400 hover:underline'
          >
            Xem tất cả →
          </Link>
        </div>

        {/* Grid truyện - chỉ preview 4 cái */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className='bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform'
            >
              <div className='aspect-[3/4] bg-gray-700 flex items-center justify-center'>
                <span className='text-gray-500 text-sm'>Cover {i + 1}</span>
              </div>
              <div className='p-3'>
                <h4 className='font-medium truncate'>Truyện {i + 1}</h4>
                <p className='text-sm text-gray-500'>Ongoing • 12.4k views</p>
              </div>
            </div>
          ))}
          <div className='aspect-[3/4] bg-gray-700/50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-600 hover:border-emerald-500 transition-colors'>
            <div className='text-center'>
              <FaUpload className='mx-auto text-emerald-400 mb-2' size={24} />
              <span className='text-sm text-gray-300'>Thêm truyện mới</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
