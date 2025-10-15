import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
})

export const fetchMangas = () => api.get('/mangas')
