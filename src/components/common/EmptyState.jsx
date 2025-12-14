export default function EmptyState({ icon = '📚', text = 'Chưa có dữ liệu' }) {
  return (
    <div className='flex flex-col items-center justify-center py-20 text-center text-gray-400'>
      <div className='text-6xl mb-4'>{icon}</div>
      <p className='text-lg'>{text}</p>
    </div>
  )
}
