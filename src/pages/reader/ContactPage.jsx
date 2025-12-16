export default function ContactPage() {
  return (
    <>
      <div className='min-h-screen relative overflow-hidden'>
        {/* Nền gradient đêm vũ trụ */}
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900' />

        {/* Overlay nhẹ để sao nổi bật hơn */}
        <div className='absolute inset-0 bg-black/20' />

        {/* Ngôi sao nhỏ lấp lánh */}
        <div className='absolute inset-0'>
          {[...Array(150)].map((_, i) => {
            const size = Math.random() * 2 + 1 // từ 1px đến 3px
            return (
              <div
                key={`star-small-${i}`}
                className='absolute bg-white rounded-full animate-twinkle'
                style={{
                  width: `${size}px`,
                  height: `${size}px`, // ← quan trọng: cùng size
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${Math.random() * 4 + 3}s`,
                }}
              />
            )
          })}
        </div>

        {/* Ngôi sao lớn hơn */}
        <div className='absolute inset-0'>
          {[...Array(50)].map((_, i) => {
            const size = Math.random() * 4 + 3 // từ 3px đến 7px
            return (
              <div
                key={`star-big-${i}`}
                className='absolute bg-cyan-300 rounded-full animate-twinkle-slow shadow-glow'
                style={{
                  width: `${size}px`,
                  height: `${size}px`, // ← cùng size → luôn tròn
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${Math.random() * 6 + 5}s`,
                }}
              />
            )
          })}
        </div>

        {/* Nội dung chính */}
        <div className='relative z-10 container mx-auto px-6 py-16'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-5xl font-bold text-white mt-4 tracking-widest'>
              LIÊN HỆ
            </h2>
            <p className='text-pink-200 text-lg mt-4 font-medium'>
              お問い合わせはお気軽にどうぞ！Manga là đam mê, chúng tôi luôn ở
              đây vì bạn ♡
            </p>
          </div>

          <div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start'>
            {/* Form liên hệ */}
            <div className='bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl'>
              <h2 className='text-3xl font-bold text-cyan-300 mb-6 flex items-center gap-3'>
                <span className='text-4xl'>✦</span> Gửi tin nhắn
              </h2>
              <form className='space-y-6'>
                <div>
                  <label className='block text-pink-200 font-medium mb-2'>
                    Tên / 名前
                  </label>
                  <input
                    type='text'
                    className='w-full px-4 py-3 rounded-xl bg-white/20 border border-pink-300/50 text-white placeholder-pink-200 focus:outline-none focus:border-cyan-400 transition'
                    placeholder='Ví dụ: Naruto Uzumaki'
                  />
                </div>
                <div>
                  <label className='block text-pink-200 font-medium mb-2'>
                    Email / メール
                  </label>
                  <input
                    type='email'
                    className='w-full px-4 py-3 rounded-xl bg-white/20 border border-pink-300/50 text-white placeholder-pink-200 focus:outline-none focus:border-cyan-400 transition'
                    placeholder='naruto@konoha.jp'
                  />
                </div>
                <div>
                  <label className='block text-pink-200 font-medium mb-2'>
                    Tin nhắn / メッセージ
                  </label>
                  <textarea
                    rows={5}
                    className='w-full px-4 py-3 rounded-xl bg-white/20 border border-pink-300/50 text-white placeholder-pink-200 focus:outline-none focus:border-cyan-400 transition resize-none'
                    placeholder='Bạn thích One Piece hay Attack on Titan hơn? Viết gì cũng được nha~'
                  />
                </div>
                <button
                  type='submit'
                  className='cursor-pointer w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-bold text-xl shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition duration-300'
                >
                  GỬI ĐI NÀO! 🚀
                </button>
              </form>
            </div>

            {/* Thông tin liên lạc */}
            <div className='space-y-8'>
              <div className='bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20'>
                <h3 className='text-2xl font-bold text-yellow-300 mb-6'>
                  Thông tin liên lạc
                </h3>
                <div className='space-y-5 text-lg text-pink-100'>
                  <div className='flex items-center gap-4'>
                    <span className='text-3xl'>📧</span>
                    <div>
                      <p className='font-medium'>Email</p>
                      <p>contact@mangajapan.vn</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <span className='text-3xl'>🌸</span>
                    <div>
                      <p className='font-medium'>Fanpage</p>
                      <p>fb.com/MangaJapanVN</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <span className='text-3xl'>💬</span>
                    <div>
                      <p className='font-medium'>Discord</p>
                      <p>discord.gg/mangajapan</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-black/50 rounded-2xl p-6 border-4 border-white shadow-2xl'>
                <p className='text-white font-bold text-2xl italic text-center transform -rotate-2'>
                  "Ore wa… luôn trả lời tin nhắn của fan trong vòng 24h
                  dattebayo!"
                </p>
                <p className='text-pink-300 text-right mt-3 font-bold'>
                  — Admin-kun ♡
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
