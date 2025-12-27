import logo from '@/assets/images/logoMangaDreamVN.png'

import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaAngleDoubleRight,
  FaHeart,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='bg-[#222222] border-t-4 border-[#b78c33] text-gray-400'>
      <div className='container'>
        <div className='max-w-6xl mx-auto pt-12 pb-8'>
          <div className='text-center mb-12'>
            <a href='/'>
              <img src={logo} alt='Logo' className='max-h-14 mx-auto! block' />
            </a>
            <p className='text-sm max-w-2xl mx-auto leading-relaxed mt-6 text-gray-300'>
              Đọc truyện tranh online miễn phí – Manga, Manhwa, Manhua bản dịch
              chất lượng cao. Cập nhật chap mới nhanh nhất Việt Nam. Không quảng
              cáo, trải nghiệm đọc mượt mà!
            </p>

            <div className='mt-8 flex justify-center gap-4'>
              <a
                href='#'
                className='w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-[#b78c33] text-lg hover:bg-[#b78c33] hover:text-white transition'
              >
                <FaFacebookF />
              </a>
              <a
                href='#'
                className='w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-[#b78c33] text-lg hover:bg-[#b78c33] hover:text-white transition'
              >
                <FaTwitter />
              </a>
              <a
                href='#'
                className='w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-[#b78c33] text-lg hover:bg-[#b78c33] hover:text-white transition'
              >
                <FaGooglePlusG />
              </a>
              <a
                href='#'
                className='w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-[#b78c33] text-lg hover:bg-[#b78c33] hover:text-white transition'
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {/* Cột 1 */}
            <div>
              <h2 className='text-gray-300 uppercase text-base font-semibold border-l-4 border-[#b78c33] pl-3 mb-5'>
                Hỗ trợ
              </h2>
              <ul className='space-y-3'>
                {[
                  'Hướng dẫn đọc truyện',
                  'Câu hỏi thường gặp',
                  'Báo lỗi truyện',
                  'Liên hệ',
                ].map((item) => (
                  <li key={item}>
                    <a
                      href='#'
                      className='text-gray-500 hover:text-[#b78c33] text-sm flex items-center transition'
                    >
                      <FaAngleDoubleRight className='mr-2 text-[#b78c33]' />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cột 2 */}
            <div>
              <h2 className='text-gray-300 uppercase text-base font-semibold border-l-4 border-[#b78c33] pl-3 mb-5'>
                Thông tin
              </h2>
              <ul className='space-y-3'>
                {[
                  'Giới thiệu',
                  'Tuyển dụng',
                  'Điều khoản',
                  'Chính sách bảo mật',
                ].map((item) => (
                  <li key={item}>
                    <a
                      href='#'
                      className='text-gray-500 hover:text-[#b78c33] text-sm flex items-center transition'
                    >
                      <FaAngleDoubleRight className='mr-2 text-[#b78c33]' />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cột 3 */}
            <div>
              <h2 className='text-gray-300 uppercase text-base font-semibold border-l-4 border-[#b78c33] pl-3 mb-5'>
                Pháp lý
              </h2>
              <ul className='space-y-3'>
                {['DMCA', 'Bản quyền', 'Khiếu nại', 'Quy định cộng đồng'].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href='#'
                        className='text-gray-500 hover:text-[#b78c33] text-sm flex items-center transition'
                      >
                        <FaAngleDoubleRight className='mr-2 text-[#b78c33]' />
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Cột 4 */}
            <div>
              <h2 className='text-gray-300 uppercase text-base font-semibold border-l-4 border-[#b78c33] pl-3 mb-5'>
                Ủng hộ team
              </h2>
              <p className='text-gray-500 text-sm leading-relaxed mb-6'>
                Nếu bạn yêu thích dự án, hãy ủng hộ team một ly cà phê để có
                động lực ra chap đều hơn nhé!
              </p>
              <a
                href='#'
                className='inline-block bg-[#b78c33] text-black font-bold px-6 py-3 rounded hover:bg-amber-400 transition'
              >
                Donate ngay <FaHeart className='inline ml-2 text-red-500' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className='bg-[#111111] py-4 border-t border-gray-800'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
            <p>
              Copyright © 2025{' '}
              <span className='text-[#b78c33] font-bold'>TênWebTruyện.com</span>
              . All rights reserved.
            </p>
            <p className='mt-2 md:mt-0'>
              Made with <FaHeart className='inline text-red-500 mx-1' /> for
              Otaku Việt Nam
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}
