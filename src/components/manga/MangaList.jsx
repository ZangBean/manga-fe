import MangaCard from '@/components/manga/MangaCard'
// import EmptyState from '@/components/common/EmptyState'

export default function MangaList({ mangaList = [] }) {
  // if (mangaList.length === 0) {
  //   return <EmptyState icon='📚' text='Chưa có manga nào' />
  // }

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
      {mangaList.map((manga) => (
        <MangaCard key={manga._id} manga={manga} />
      ))}
    </div>
  )
}
