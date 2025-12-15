export default function NewsPage() {
  const posts = [
    {
      id: 1,
      author: 'Nguyễn Văn A',
      time: '2 giờ trước',
      content: 'Hôm nay thời tiết đẹp quá 🌤️',
      image: 'https://images.unsplash.com/photo-1503264116251-35a269479413',
      likes: 12,
      comments: 3,
    },
    {
      id: 2,
      author: 'Trần Thị B',
      time: 'Hôm qua',
      content: 'Vừa hoàn thành dự án mới, khá mệt nhưng rất vui 💪',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
      likes: 45,
      comments: 10,
    },
  ]

  return (
    <div className='min-h-screen bg-gray-100 flex justify-center py-6'>
      <div className='w-full max-w-xl space-y-4'>
        {/* Feed */}
        {posts.map((post) => (
          <div
            key={post.id}
            className='bg-white rounded-2xl shadow p-4 space-y-3'
          >
            <div>
              <div className='font-semibold text-black'>{post.author}</div>
              <div className='text-xs text-gray-500'>{post.time}</div>
            </div>

            <div className='text-gray-800'>{post.content}</div>

            {post.image && (
              <img
                src={post.image}
                alt='post image'
                className='rounded-xl w-full max-h-96 object-cover'
              />
            )}

            <div className='flex justify-between text-sm text-gray-500'>
              <span>{post.likes} thích</span>
              <span>{post.comments} bình luận</span>
            </div>

            <div className='flex border-t pt-2 text-sm font-medium text-gray-600'>
              <button className='flex-1 hover:bg-gray-100 py-2 rounded-xl'>
                👍 Thích
              </button>
              <button className='flex-1 hover:bg-gray-100 py-2 rounded-xl'>
                💬 Bình luận
              </button>
              <button className='flex-1 hover:bg-gray-100 py-2 rounded-xl'>
                ↗️ Chia sẻ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
