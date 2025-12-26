import { FaSearch, FaUser, FaSignOutAlt } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import logo from '@/assets/images/logoMangaDreamVN.png'

const MENUS = [
  { to: '/', label: 'Trang chủ' },
  { to: '/the-loai', label: 'Thể loại' },
  { to: '/tin-tuc', label: 'Tin tức' },
  { to: '/lich-su', label: 'Lịch sử' },
  { to: '/lien-he', label: 'Liên hệ' },
]

export default function Header() {
  const { isAuthenticated, logout } = useAuth()

  return (
    <header className='bg-[#070720] sticky top-0 z-50 shadow-md'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-[65px]'>
          {/* Logo */}
          <div className='flex-1'>
            <Link to='/'>
              <img src={logo} alt='Logo' className='max-h-[56px]' />
            </Link>
          </div>

          {/* Menu */}
          <div className='flex-2'>
            <ul className='flex justify-center'>
              {MENUS.map((item) => (
                <li key={item.to} className='w-[120px] h-[65px]'>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center justify-center h-full text-white transition
                      ${isActive ? 'bg-[#e53637]' : 'hover:bg-white/10'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Search + Auth */}
          <div className='flex-1 flex justify-end items-center gap-4'>
            <div className='relative'>
              <input
                placeholder='Tìm kiếm truyện...'
                className='w-[250px] h-[40px] pl-4 pr-10 rounded-full'
              />
              <FaSearch className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400' />
            </div>

            {isAuthenticated ? (
              <button
                onClick={logout}
                className='flex items-center gap-2 text-white hover:text-red-400'
              >
                <FaSignOutAlt /> Logout
              </button>
            ) : (
              <Link to='/dang-nhap'>
                <FaUser className='text-white text-2xl hover:text-indigo-400' />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
