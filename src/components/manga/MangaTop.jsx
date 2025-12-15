import { useState } from 'react'

const DATA = {
  day: [
    {
      id: 1,
      title: 'One Piece - Đảo Hải Tặc',
      rating: 9.3,
      chapter: '1153/????',
      year: 1999,
      cover: '/onepiece.jpg',
    },
    {
      id: 2,
      title: 'One Punch Man 3',
      rating: 5.6,
      chapter: '10/??',
      year: 2025,
      cover: '/opm.jpg',
    },
    {
      id: 3,
      title: 'Shuumatsu no Valkyrie III',
      rating: 9.6,
      chapter: '15/15',
      year: 2025,
      cover: '/record.jpg',
    },
    {
      id: 4,
      title: 'Attack on Titan',
      rating: 9.1,
      chapter: '139/139',
      year: 2021,
      cover: '/aot.jpg',
    },
    {
      id: 5,
      title: 'Demon Slayer',
      rating: 8.9,
      chapter: '205/205',
      year: 2020,
      cover: '/kimetsu.jpg',
    },
  ],

  week: [
    {
      id: 6,
      title: 'Blue Lock',
      rating: 8.7,
      chapter: '245/??',
      year: 2025,
      cover: '/bluelock.jpg',
    },
    {
      id: 7,
      title: 'Jujutsu Kaisen',
      rating: 8.8,
      chapter: '270/??',
      year: 2025,
      cover: '/jjk.jpg',
    },
    {
      id: 8,
      title: 'One Piece - Đảo Hải Tặc',
      rating: 9.3,
      chapter: '1153/????',
      year: 1999,
      cover: '/onepiece.jpg',
    },
    {
      id: 9,
      title: 'Chainsaw Man',
      rating: 8.5,
      chapter: '180/??',
      year: 2024,
      cover: '/chainsaw.jpg',
    },
    {
      id: 10,
      title: 'Solo Leveling',
      rating: 9.0,
      chapter: '200/200',
      year: 2023,
      cover: '/solo.jpg',
    },
  ],

  month: [
    {
      id: 11,
      title: 'One Piece - Đảo Hải Tặc',
      rating: 9.3,
      chapter: '1153/????',
      year: 1999,
      cover: '/onepiece.jpg',
    },
    {
      id: 12,
      title: 'Solo Leveling',
      rating: 9.0,
      chapter: '200/200',
      year: 2023,
      cover: '/solo.jpg',
    },
    {
      id: 13,
      title: 'Jujutsu Kaisen',
      rating: 8.8,
      chapter: '270/??',
      year: 2025,
      cover: '/jjk.jpg',
    },
    {
      id: 14,
      title: 'Naruto',
      rating: 8.9,
      chapter: '700/700',
      year: 2014,
      cover: '/naruto.jpg',
    },
    {
      id: 15,
      title: 'Bleach',
      rating: 8.6,
      chapter: '686/686',
      year: 2016,
      cover: '/bleach.jpg',
    },
  ],

  year: [
    {
      id: 16,
      title: 'One Piece - Đảo Hải Tặc',
      rating: 9.3,
      chapter: '1153/????',
      year: 1999,
      cover: '/onepiece.jpg',
    },
    {
      id: 17,
      title: 'Naruto',
      rating: 8.9,
      chapter: '700/700',
      year: 2014,
      cover: '/naruto.jpg',
    },
    {
      id: 18,
      title: 'Dragon Ball',
      rating: 8.8,
      chapter: '519/519',
      year: 1995,
      cover: '/dragonball.jpg',
    },
    {
      id: 19,
      title: 'Detective Conan',
      rating: 8.7,
      chapter: '1100/??',
      year: 1996,
      cover: '/conan.jpg',
    },
    {
      id: 20,
      title: 'Attack on Titan',
      rating: 9.1,
      chapter: '139/139',
      year: 2021,
      cover: '/aot.jpg',
    },
  ],
}

const FILTERS = [
  { key: 'day', label: 'Ngày' },
  { key: 'week', label: 'Tuần' },
  { key: 'month', label: 'Tháng' },
  { key: 'year', label: 'Năm' },
]

export default function MangaTop() {
  const [filter, setFilter] = useState('day')

  return (
    <section>
      <h3 className='text-lg font-semibold text-white mb-3'>Top truyện</h3>

      <div className='flex gap-2 mb-4'>
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-3 py-1 text-xs rounded
              ${
                filter === f.key
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className='space-y-2'>
        {DATA[filter]?.map((m, i) => (
          <div
            key={m.id}
            className='flex items-center gap-3 bg-[#0f1419] rounded-lg p-2'
          >
            {/* Thumbnail + rank */}
            <div className='relative'>
              <span className='absolute -top-1 -left-1 bg-lime-400 text-black text-xs font-bold px-1 rounded'>
                #{i + 1}
              </span>
              <img
                src={m.cover}
                alt={m.title}
                className='w-14 h-20 object-cover rounded'
              />
            </div>

            {/* Info */}
            <div className='flex-1 min-w-0'>
              <h4 className='text-sm text-white font-medium line-clamp-1'>
                {m.title}
              </h4>

              <div className='flex items-center gap-3 text-xs text-white/70 mt-1'>
                <span className='text-lime-400'>★ {m.rating}</span>
                <span>{m.chapter}</span>
                <span>{m.year}</span>
              </div>
            </div>

            {/* Badge */}
            <span className='bg-red-600 text-white text-[10px] px-2 py-0.5 rounded'>
              HOT
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
