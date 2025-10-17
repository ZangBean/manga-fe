import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchMangas } from '@/services/apiManga'

export const fetchMangaList = createAsyncThunk(
  'manga/fetchMangaList',
  async () => {
    try {
      const response = await fetchMangas()
      return response.data
    } catch (error) {
      return error
    }
  }
)
