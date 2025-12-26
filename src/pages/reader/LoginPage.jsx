import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function LoginPage() {
  const [email, setEmail] = useState('admin@gmail.com')
  const [password, setPassword] = useState('123456')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login({ email, password })
      navigate(from, { replace: true })
    } catch {
      setError('Email hoặc mật khẩu không đúng')
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-linear-to-r from-blue-400 to-purple-500'>
      <div className='w-full max-w-sm p-8 bg-white rounded-2xl shadow-xl'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>
          Đăng nhập
        </h2>
        {error && (
          <p className='text-red-500 text-sm text-center mb-4'>{error}</p>
        )}
        <form className='space-y-5' onSubmit={handleSubmit}>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Email
            </label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete='username'
              required
              className='w-full px-4 py-2 border border-gray-300 bg-gray-100 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
            />
          </div>
          <div className='relative'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Mật khẩu
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete='current-password'
              required
              className='w-full px-4 py-2 border border-gray-300 bg-gray-100 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition pr-10'
            />
            <button
              type='button'
              className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type='submit'
            className='w-full py-2 text-white bg-linear-to-r from-blue-500 to-purple-600 rounded-lg font-semibold shadow-lg hover:from-blue-600 hover:to-purple-700 transition'
          >
            Đăng nhập
          </button>
        </form>
        <p className='text-xs text-center text-gray-500 mt-4'>
          Chưa có tài khoản?{' '}
          <a href='/register' className='text-blue-600 hover:underline'>
            Đăng ký
          </a>
        </p>
      </div>
    </div>
  )
}
