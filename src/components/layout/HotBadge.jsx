import { memo } from 'react'

const HotBadge = memo(function HotBadge({ className = '' }) {
  return (
    <span
      className={`hot-badge inline-block px-6 py-3 text-lg font-bold rounded-lg shadow-2xl ${className}`}
    >
      <span className='relative z-10'>HOT</span>
    </span>
  )
})

export default HotBadge
