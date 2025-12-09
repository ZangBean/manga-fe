import { FaSearch, FaUser } from 'react-icons/fa'
import logo from '@/assets/images/logoMangaDreamVN.png'

export default function Header() {
  return (
    <>
      <header className='bg-[#070720] sticky top-0 z-50 shadow-md'>
        <div className='container'>
          <div className='flex items-center justify-between h-[65px]'>
            <div className='flex-1'>
              <a href='/'>
                <img
                  src={logo}
                  alt='Logo'
                  className='max-h-[56px] object-contain'
                />
              </a>
            </div>

            <div className='flex-2'>
              <ul className='flex items-center justify-center'>
                {[
                  { href: '/', label: 'Trang chủ', active: true },
                  { href: '/the-loai', label: 'Thể loại' },
                  { href: '/tin-tuc', label: 'Tin tức' },
                  { href: '/lich-su', label: 'Lịch sử' },
                  { href: '/lien-he', label: 'Liên hệ' },
                ].map((item) => (
                  <li
                    key={item.href}
                    className={`w-[120px] h-[65px] text-center flex items-center justify-center ${
                      item.active ? 'bg-[#e53637]' : ''
                    }`}
                  >
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex-1 flex justify-end items-center gap-4'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Tìm kiếm truyện...'
                  className='w-[250px] h-[40px] !pl-4 pr-10 rounded-full border bg-white text-black focus:outline-orange-300'
                />
                <FaSearch className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400' />
              </div>
              <a href='/dang-nhap'>
                <FaUser className='text-white text-2xl cursor-pointer' />
              </a>
            </div>
          </div>
        </div>
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
    </>
  )
}
