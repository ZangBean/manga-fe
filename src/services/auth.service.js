import api from './api'

export const login = (credentials) => api.post('/auth/login', credentials)

export const register = (data) => api.post('/auth/register', data)

export const logout = () => api.post('/auth/logout')

export const refreshToken = () => api.post('/auth/refresh')

export const forgotPassword = (email) =>
  api.post('/auth/forgot-password', { email })

export const resetPassword = (token, newPassword) =>
  api.post('/auth/reset-password', { token, newPassword })
