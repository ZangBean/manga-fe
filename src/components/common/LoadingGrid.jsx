export default function LoadingGrid() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className='bg-white rounded-xl shadow-sm animate-pulse overflow-hidden border border-gray-200'
          >
            <div className='aspect-[3/4] bg-gray-100' />

            <div className='p-4 space-y-3'>
              <div className='h-4 bg-gray-200 rounded w-3/4' />
              <div className='h-4 bg-gray-200 rounded w-1/2' />
              <div className='h-8 bg-gray-300 rounded-full w-1/3' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
