import { useMemo } from 'react'

const GENRES = [
  { id: 1, name: 'Hành động' },
  { id: 2, name: 'Phiêu lưu' },
  { id: 3, name: 'Giả tưởng' },
  { id: 4, name: 'Học đường' },
  { id: 5, name: 'Kinh dị' },
]

const MANGA_BY_GENRE = {
  'Hành động': [
    { id: 1, title: 'One Piece', cover: '/onepiece.jpg' },
    { id: 2, title: 'Attack on Titan', cover: '/aot.jpg' },
    { id: 3, title: 'Jujutsu Kaisen', cover: '/jjk.jpg' },
    { id: 4, title: 'Chainsaw Man', cover: '/chainsaw.jpg' },
  ],
  'Phiêu lưu': [
    { id: 5, title: 'Naruto', cover: '/naruto.jpg' },
    { id: 6, title: 'Hunter x Hunter', cover: '/hxh.jpg' },
    { id: 7, title: 'Magi', cover: '/magi.jpg' },
    { id: 8, title: 'Fairy Tail', cover: '/fairy.jpg' },
  ],
  'Giả tưởng': [
    { id: 9, title: 'Solo Leveling', cover: '/solo.jpg' },
    { id: 10, title: 'Black Clover', cover: '/blackclover.jpg' },
    { id: 11, title: 'Overlord', cover: '/overlord.jpg' },
    { id: 12, title: 'Re:Zero', cover: '/rezero.jpg' },
  ],
  'Học đường': [
    { id: 13, title: 'Blue Lock', cover: '/bluelock.jpg' },
    { id: 14, title: 'Horimiya', cover: '/horimiya.jpg' },
    { id: 15, title: 'Classroom of the Elite', cover: '/classroom.jpg' },
    { id: 16, title: 'Haikyuu!!', cover: '/haikyuu.jpg' },
  ],
  'Kinh dị': [
    { id: 17, title: 'Tokyo Ghoul', cover: '/tokyoghoul.jpg' },
    { id: 18, title: 'Another', cover: '/another.jpg' },
    { id: 19, title: 'Junji Ito Collection', cover: '/junji.jpg' },
    { id: 20, title: 'Parasyte', cover: '/parasyte.jpg' },
  ],
}

export default function GenreSuggestion() {
  const genre = useMemo(
    () => GENRES[Math.floor(Math.random() * GENRES.length)],
    []
  )

  const mangas = MANGA_BY_GENRE[genre.name] || []

  return (
    <section className='space-y-4'>
      <h3 className='text-lg font-semibold text-white'>
        Gợi ý thể loại: <span className='text-indigo-400'>{genre.name}</span>
      </h3>

      <div className='space-y-3'>
        {mangas.map((m) => (
          <div
            key={m.id}
            className='flex items-center gap-3 bg-white/5 rounded-lg p-2'
          >
            <img
              src={m.cover}
              alt={m.title}
              className='w-10 h-14 rounded object-cover'
            />
            <span className='text-sm text-white line-clamp-1'>{m.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
