import api from './api'

export const getTopViews = (limit = 10) =>
  api.get('/mangas/top-views', { params: { limit } })

export const getAllMangas = () => api.get('/mangas')

export const getLatestMangas = (limit = 10) =>
  api.get('/mangas/latest', { params: { limit } })

export const getMangasPaginated = (page = 1, limit = 20) =>
  api.get('/mangas/paginated', { params: { page, limit } })

export const getMangaById = (id) => api.get(`/mangas/${id}`)

export const getRandomMangas = (limit = 5) =>
  api.get('/mangas/random', { params: { limit } })
