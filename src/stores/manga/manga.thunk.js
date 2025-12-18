import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllMangas, getMangaById, getTopViews } from '@/services/apiManga'
import { MANGA_LIMITS } from '@/constants/limits'

const handleApiError = (err) => err.response?.data || err.message

export const fetchTopMangas = createAsyncThunk(
  'manga/fetchTopMangas',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getTopViews(MANGA_LIMITS.SLIDER_LIMIT)
      return res.data
    } catch (err) {
      return rejectWithValue(handleApiError(err))
    }
  }
)

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
