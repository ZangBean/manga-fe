export default function MangaCard({ manga }) {
  return (
    <div className='group cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-300'>
      <div className='relative overflow-hidden'>
        <img
          src={manga.coverImage}
          alt={manga.title}
          className='w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute top-2 right-2 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm'>
          NEW
        </div>
      </div>

      <div className='p-4'>
        <h3 className='font-semibold text-gray-800 text-sm line-clamp-2 mb-3 group-hover:text-indigo-600 transition-colors'>
          {manga.title}
        </h3>
        <button className='w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-xl text-sm font-medium hover:from-indigo-600 hover:to-purple-600 transition-transform duration-200 hover:scale-[1.03]'>
          Đọc Ngay
        </button>
      </div>
    </div>
  )
}
