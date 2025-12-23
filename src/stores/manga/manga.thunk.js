import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  getAllMangas,
  getMangaById,
  getTopViews,
  getLatestMangas,
  getRandomMangas,
} from '@/services/apiManga'
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

export const fetchLatestMangas = createAsyncThunk(
  'manga/fetchLatestMangas',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getLatestMangas(MANGA_LIMITS.LATEST_HOME_LIMIT)
      return res.data
    } catch (err) {
      return rejectWithValue(handleApiError(err))
    }
  }
)

export const fetchMangasPaginated = createAsyncThunk(
  'manga/fetchMangasPaginated',
  async (
    { page = 1, limit = MANGA_LIMITS.PAGINATED_MANGA_LIMIT },
    { rejectWithValue }
  ) => {
    try {
      const res = await getMangasPaginated(page, limit)
      return res.data
    } catch (err) {
      return rejectWithValue(handleApiError(err))
    }
  }
)
export const fetchRandomMangas = createAsyncThunk(
  'manga/fetchRandomMangas',
  async (limit = 5, { rejectWithValue }) => {
    try {
      const res = await getRandomMangas(limit)
      return res.data
    } catch (err) {
      return rejectWithValue(handleApiError(err))
    }
  }
)
