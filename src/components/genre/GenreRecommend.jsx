import { FaEye } from 'react-icons/fa'

const recommendations = [
  'One Piece',
  'Attack on Titan',
  'Jujutsu Kaisen',
  'Demon Slayer',
]

export default function GenreRecommend() {
  return (
    <div className='lg:col-span-4'>
      <h5 className='text-2xl font-bold text-white mb-8'>
        Bạn có thể thích...
      </h5>
      <div className='space-y-6'>
        {recommendations.map((title, i) => (
          <div
            key={i}
            className='relative h-40 bg-cover bg-center rounded-lg overflow-hidden cursor-pointer group'
            style={{
              backgroundImage: `ur[](https://via.placeholder.com/400x600?text=${encodeURIComponent(
                title
              )})`,
            }}
          >
            <div className='absolute inset-0 bg-linear-to-t from-black/80 to-transparent'></div>
            <div className='absolute top-3 left-3 bg-pink-600 text-white text-xs px-2 py-1 rounded'>
              100+ / ?
            </div>
            <div className='absolute bottom-4 left-4 right-4'>
              <h5 className='text-white font-medium line-clamp-2 group-hover:text-pink-400 transition'>
                <a href='#'>{title}</a>
              </h5>
            </div>
            <div className='absolute top-3 right-3 bg-[#3d3d3d] text-white text-xs px-2 py-1 rounded flex items-center gap-1'>
              <FaEye /> 50k+
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
