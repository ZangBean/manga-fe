import { createContext, useContext, useEffect, useState } from 'react'
import api from '@/services/api'
import { login as loginService } from '@/services/auth.service'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadUser = async () => {
      try {
        const { data } = await api.get('/auth/me', { withCredentials: true })
        setUser(data.user || null)
      } catch (err) {
        if (err.response?.status !== 401) console.error(err)
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }
    loadUser()
  }, [])

  const login = async (credentials) => {
    const { data } = await loginService(credentials) // BE set cookie
    setUser(data.user)
    return data.user
  }

  const logout = async () => {
    await api.post('/auth/logout', null, {
      withCredentials: true,
    })
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
