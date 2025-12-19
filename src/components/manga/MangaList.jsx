import MangaCard from '@/components/manga/MangaCard'
import EmptyState from '@/components/common/EmptyState'

export default function MangaList({ title = 'Truyện mới', mangaList = [] }) {
  return (
    <section className='space-y-6'>
      <h2 className='text-xl font-semibold text-white'>{title}</h2>

      {mangaList.length === 0 ? (
        <EmptyState icon='📚' text='Chưa có manga nào' />
      ) : (
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
          {mangaList.map((manga) => (
            <div
              key={manga._id}
              className='transition-transform hover:-translate-y-1 hover:z-30'
            >
              <MangaCard manga={manga} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
