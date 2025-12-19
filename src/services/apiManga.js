import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

export const getTopViews = (limit = 10) =>
  api.get('/mangas/top-views', { params: { limit } })

export const getAllMangas = () => api.get('/mangas')
export const getMangaById = (id) => api.get(`/mangas/${id}`)
