export default function StoryCategoryPage() {
  const categories = [
    {
      id: 1,
      name: 'Tiên hiệp',
      desc: 'Tu luyện, phi thăng, thế giới huyền ảo',
      icon: '🧙‍♂️',
    },
    { id: 2, name: 'Kiếm hiệp', desc: 'Giang hồ, ân oán, võ lâm', icon: '⚔️' },
    {
      id: 3,
      name: 'Ngôn tình',
      desc: 'Tình cảm, lãng mạn, cảm xúc',
      icon: '💖',
    },
    {
      id: 4,
      name: 'Đô thị',
      desc: 'Cuộc sống hiện đại, đời thường',
      icon: '🏙️',
    },
    { id: 5, name: 'Kinh dị', desc: 'Hồi hộp, ma quái, rùng rợn', icon: '👻' },
    {
      id: 6,
      name: 'Khoa học viễn tưởng',
      desc: 'Tương lai, công nghệ, vũ trụ',
      icon: '🚀',
    },
  ]

  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Header */}
      <div className='bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 px-6 text-center'>
        <h1 className='text-3xl font-semibold'>Thể loại truyện</h1>
        <p className='mt-3 text-sm opacity-90'>
          Khám phá truyện theo từng thể loại bạn yêu thích
        </p>
      </div>

      {/* Categories */}
      <div className='max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {categories.map((c) => (
          <div
            key={c.id}
            className='bg-white rounded-2xl shadow p-6 hover:shadow-lg transition cursor-pointer'
          >
            <div className='text-4xl'>{c.icon}</div>
            <h2 className='mt-3 font-semibold text-lg'>{c.name}</h2>
            <p className='text-sm text-gray-600 mt-1'>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
