import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllMangas, getMangaById } from '@/services/apiManga'

const handleApiError = (err) => err.response?.data || err.message

export const fetchMangaList = createAsyncThunk(
  'manga/fetchMangaList',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getAllMangas()
      return res.data
    } catch (err) {
      return rejectWithValue(handleApiError(err))
    }
  }
)

export const fetchMangaById = createAsyncThunk(
  'manga/fetchMangaById',
  async (id, { rejectWithValue }) => {
    try {
      const res = await getMangaById(id)
      return res.data
    } catch (err) {
      return rejectWithValue(handleApiError(err))
    }
  }
)
