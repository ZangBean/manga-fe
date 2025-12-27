// src/pages/uploader/AnalyticsPage.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaEye,
  FaUsers,
  FaComments,
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
} from 'react-icons/fa'

export default function AnalyticsPage() {
  // Dữ liệu giả lập - sau này fetch từ API (ví dụ: useEffect + axios/fetch)
  const [timeRange, setTimeRange] = useState('7days') // 7days | 30days | all

  const overviewStats = [
    {
      title: 'Tổng lượt xem',
      value: '187.4k',
      change: '+12.3%',
      isPositive: true,
      icon: FaEye,
      color: 'emerald',
    },
    {
      title: 'Follower mới',
      value: '1.2k',
      change: '+8.7%',
      isPositive: true,
      icon: FaUsers,
      color: 'blue',
    },
    {
      title: 'Bình luận',
      value: '3.4k',
      change: '-2.1%',
      isPositive: false,
      icon: FaComments,
      color: 'purple',
    },
  ]

  // Dữ liệu cho line chart (views theo ngày) - giả lập
  const chartData = {
    labels: [
      'Ngày 1',
      'Ngày 2',
      'Ngày 3',
      'Ngày 4',
      'Ngày 5',
      'Ngày 6',
      'Ngày 7',
    ],
    datasets: [
      {
        label: 'Lượt xem',
        data: [1200, 1900, 1500, 2800, 3200, 4100, 5200],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        tension: 0.4,
      },
    ],
  }

  return (
    <div className='p-4 md:p-6 lg:p-8 space-y-8 max-w-7xl mx-auto'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
        <div>
          <h1 className='text-3xl font-bold text-white'>Thống kê</h1>
          <p className='text-gray-400 mt-1'>
            Theo dõi hiệu suất truyện của bạn
          </p>
        </div>

        <div className='flex gap-3 bg-gray-800 rounded-lg p-1 border border-gray-700'>
          {['7days', '30days', 'all'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                timeRange === range
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              {range === '7days'
                ? '7 ngày'
                : range === '30days'
                ? '30 ngày'
                : 'Toàn bộ'}
            </button>
          ))}
        </div>
      </div>

      {/* Overview stats cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {overviewStats.map((stat, index) => (
          <div
            key={index}
            className='bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition-all'
          >
            <div className='flex items-center justify-between mb-4'>
              <stat.icon className={`text-${stat.color}-400`} size={28} />
              <span
                className={`flex items-center gap-1 text-sm font-medium ${
                  stat.isPositive ? 'text-emerald-400' : 'text-red-400'
                }`}
              >
                {stat.isPositive ? (
                  <FaArrowUp size={14} />
                ) : (
                  <FaArrowDown size={14} />
                )}
                {stat.change}
              </span>
            </div>
            <div className='text-3xl font-bold mb-1'>{stat.value}</div>
            <div className='text-gray-400 text-sm'>{stat.title}</div>
          </div>
        ))}
      </div>

      {/* Charts section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Line chart - Views over time */}
        <div className='bg-gray-800 rounded-xl p-6 border border-gray-700'>
          <h3 className='text-xl font-semibold mb-4 flex items-center gap-2'>
            <FaChartLine className='text-emerald-400' />
            Lượt xem theo thời gian
          </h3>
          <div className='h-80 bg-gray-900 rounded-lg flex items-center justify-center'>
            {/* Ở đây bạn có thể dùng Recharts, Chart.js hoặc ApexCharts */}
            {/* Ví dụ placeholder */}
            <div className='text-gray-500 text-center'>
              <p className='text-lg'>Biểu đồ đường lượt xem</p>
              <p className='text-sm'>(Tích hợp Chart.js / Recharts sau)</p>
            </div>
          </div>
        </div>

        {/* Bar chart - Top series */}
        <div className='bg-gray-800 rounded-xl p-6 border border-gray-700'>
          <h3 className='text-xl font-semibold mb-4'>
            Top truyện hiệu suất cao
          </h3>
          <div className='space-y-4'>
            {[
              { title: 'Ác Quỷ Học Đường', views: '98.2k' },
              { title: 'Hành Trình Tu Tiên', views: '62.5k' },
              { title: 'Tình Yêu Siêu Nhiên', views: '45.1k' },
            ].map((item, i) => (
              <div key={i} className='flex justify-between items-center'>
                <span className='font-medium truncate max-w-[70%]'>
                  {item.title}
                </span>
                <span className='text-emerald-400 font-semibold'>
                  {item.views}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick links */}
      <div className='bg-gray-800 rounded-xl p-6 border border-gray-700'>
        <h3 className='text-xl font-semibold mb-4'>Khám phá thêm</h3>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <Link
            to='/uploader/comments'
            className='bg-gray-700 hover:bg-gray-600 p-4 rounded-lg text-center transition-colors'
          >
            Xem bình luận chi tiết
          </Link>
          <Link
            to='/uploader/notifications'
            className='bg-gray-700 hover:bg-gray-600 p-4 rounded-lg text-center transition-colors'
          >
            Thông báo & tương tác
          </Link>
          <Link
            to='/uploader/series'
            className='bg-gray-700 hover:bg-gray-600 p-4 rounded-lg text-center transition-colors'
          >
            Quản lý truyện
          </Link>
        </div>
      </div>
    </div>
  )
}
