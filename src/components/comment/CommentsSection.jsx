const sampleComments = [
  {
    name: 'Chris Curry',
    time: '1 giờ trước',
    content: 'Truyện hay quá, đang hóng chap mới!',
  },
  {
    name: 'Lewis Mann',
    time: '5 giờ trước',
    content: 'Update nhanh hơn nữa đi admin ơi!',
  },
  {
    name: 'Louis Tyler',
    time: '20 giờ trước',
    content: 'Chap mới chất lượng cao!',
  },
]

export default function CommentsSection() {
  return (
    <div className='lg:col-span-8'>
      <h5 className='text-2xl font-bold text-white mb-8'>Bình luận</h5>

      <div className='space-y-6 mb-12'>
        {sampleComments.map((c, i) => (
          <div key={i} className='flex gap-5'>
            <div className='relative'>
              <div className='w-12 h-12 bg-gray-600 rounded-full'></div>
              <div className='absolute -right-7 top-4 w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-[#1d1e39] border-b-8 border-b-transparent rotate-45'></div>
            </div>
            <div className='flex-1 bg-[#1d1e39] rounded-lg px-6 py-4'>
              <h6 className='text-white font-bold mb-2'>
                {c.name} -{' '}
                <span className='text-gray-400 font-normal text-sm'>
                  {c.time}
                </span>
              </h6>
              <p className='text-gray-300 leading-relaxed'>{c.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h5 className='text-2xl font-bold text-white mb-6'>
          Viết bình luận của bạn
        </h5>
        <form>
          <textarea
            className='w-full bg-[#1d1e39] text-gray-300 rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500'
            rows='4'
            placeholder='Nhập bình luận của bạn...'
          ></textarea>
          <div className='mt-4 text-right'>
            <button className='bg-pink-600 hover:bg-pink-700 text-white font-bold uppercase tracking-wider px-6 py-3 rounded transition'>
              Gửi bình luận
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
