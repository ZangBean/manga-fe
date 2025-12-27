import { NavLink } from 'react-router-dom'
import { FaHome, FaBook, FaUpload, FaChartBar } from 'react-icons/fa'

const menu = [
  { icon: FaHome, label: 'Dashboard', path: '/uploader/dashboard' },
  { icon: FaBook, label: 'Truyện của tôi', path: '/uploader/series' },
  { icon: FaUpload, label: 'Upload Chapter', path: '/uploader/upload-chapter' },
  { icon: FaChartBar, label: 'Thống kê', path: '/uploader/analytics' },
]

export default function Sidebar() {
  return (
    <aside className='hidden lg:block w-64 bg-gray-900 border-r border-gray-800'>
      <div className='p-6 border-b border-gray-800'>
        <h2 className='text-lg font-semibold text-emerald-400'>Dashboard</h2>
      </div>

      <nav className='p-4 space-y-2'>
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg ${
                isActive
                  ? 'bg-gray-800 text-emerald-400'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
