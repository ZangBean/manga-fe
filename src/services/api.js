import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  timeout: 15000,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status
    const url = error.config?.url

    if (status === 401 && url?.includes('/auth/me')) {
      return Promise.reject(error)
    }

    if (status === 401) {
      console.warn('Phiên đăng nhập hết hạn')
    }

    return Promise.reject(error)
  }
)

export default api
