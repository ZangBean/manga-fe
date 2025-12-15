import { FaSearch, FaUser } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import logo from '@/assets/images/logoMangaDreamVN.png'

const MENUS = [
  { to: '/', label: 'Trang chủ' },
  { to: '/the-loai', label: 'Thể loại' },
  { to: '/tin-tuc', label: 'Tin tức' },
  { to: '/lich-su', label: 'Lịch sử' },
  { to: '/lien-he', label: 'Liên hệ' },
]

export default function Header() {
  return (
    <header className='bg-[#070720] sticky top-0 z-50 shadow-md'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-[65px]'>
          {/* Logo */}
          <div className='flex-1'>
            <Link to='/'>
              <img
                src={logo}
                alt='Logo'
                className='max-h-[56px] object-contain'
              />
            </Link>
          </div>

          {/* Menu */}
          <div className='flex-2'>
            <ul className='flex items-center justify-center'>
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

          {/* Search + User */}
          <div className='flex-1 flex justify-end items-center gap-4'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Tìm kiếm truyện...'
                className='w-[250px] h-[40px] pl-4 pr-10 rounded-full bg-white text-black outline-none focus:ring-2 focus:ring-orange-400'
              />
              <FaSearch className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400' />
            </div>

            <Link to='/dang-nhap'>
              <FaUser className='text-white text-2xl cursor-pointer hover:text-indigo-400 transition' />
            </Link>
          </div>
        </div>
      </div>

      {/* Theme toggle (giữ nguyên, không ảnh hưởng router) */}
      <div className='floating-toggle scale-[0.25] absolute top-[78px] right-6'>
        <label className='switch relative inline-block w-[320px] h-[130px]'>
          <input type='checkbox' />
          <div className='slider round white'>
            <img
              className='clouds cloud1'
              src='https://i.ibb.co/BKZ5z46/Mediamodifier-Design-Template.png'
            />
            <img
              className='clouds cloud2'
              src='https://i.ibb.co/BKZ5z46/Mediamodifier-Design-Template.png'
            />
            <div className='night'></div>
            <img
              className='balloon'
              src='https://i.ibb.co/rtvfLkh/kisspng-hot-air-ballooning-hot-air-balloon-festival-flight-balloon-festival-5b0c63bbf3e107-504475381.png'
            />
            <p className='star'>✦</p>
            <p className='star'>✦</p>
            <p className='star'>✦</p>
            <p className='star'>✦</p>
            <p className='star'>✦</p>
            <img
              className='spaceship'
              src='https://i.ibb.co/LhFzH2X/kisspng-emoji-rocket-spacecraft-text-messaging-clip-art-rocket-5acb92ecc2cf10-049862491523290860798.png'
            />
          </div>
        </label>
      </div>
    </header>
  )
}
