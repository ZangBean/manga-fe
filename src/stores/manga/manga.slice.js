import { createSlice } from '@reduxjs/toolkit'
import {
  fetchTopMangas,
  fetchLatestMangas,
  fetchMangasPaginated,
  fetchMangaById,
  fetchMangaList,
} from './manga.thunk'

const initialState = {
  // Trang chủ: manga mới cập nhật
  latestMangas: [],
  latestStatus: 'idle',
  // Trang tất cả: phân trang
  paginatedMangas: [],
  pagination: null,
  paginatedStatus: 'idle',
  // Top views
  topMangas: [],
  topStatus: 'idle',
  // Chi tiết manga
  selected: null,
  selectedStatus: 'idle',
  // List cũ
  list: [],
  status: 'idle',
  error: null,
}

const mangaSlice = createSlice({
  name: 'manga',
  initialState,
  reducers: {
    clearSelected(state) {
      state.selected = null
      state.selectedStatus = 'idle'
      state.error = null
    },
  },
  extraReducers: (builder) => {
    const handlePending = (state, key = 'status') => {
      state[key] = 'loading'
      state.error = null
    }

    const handleFulfilled = (state, action, dataKey, statusKey = 'status') => {
      state[statusKey] = 'succeeded'
      state[dataKey] = action.payload
    }

    const handleRejected = (state, action, statusKey = 'status') => {
      state[statusKey] = 'failed'
      state.error = action.payload || action.error.message
    }

    builder
      // Latest mangas (trang chủ)
      .addCase(fetchLatestMangas.pending, (state) => {
        handlePending(state, 'latestStatus')
      })
      .addCase(fetchLatestMangas.fulfilled, (state, action) => {
        handleFulfilled(state, action, 'latestMangas', 'latestStatus')
      })
      .addCase(fetchLatestMangas.rejected, (state, action) => {
        handleRejected(state, action, 'latestStatus')
      })

      // Paginated mangas
      .addCase(fetchMangasPaginated.pending, (state) => {
        handlePending(state, 'paginatedStatus')
      })
      .addCase(fetchMangasPaginated.fulfilled, (state, action) => {
        state.paginatedStatus = 'succeeded'
        state.paginatedMangas = action.payload.mangas
        state.pagination = action.payload.pagination
      })
      .addCase(fetchMangasPaginated.rejected, (state, action) => {
        handleRejected(state, action, 'paginatedStatus')
      })

      // Fetch top mangas
      .addCase(fetchTopMangas.pending, (state) => {
        handlePending(state, 'topStatus')
      })
      .addCase(fetchTopMangas.fulfilled, (state, action) => {
        state.topStatus = 'succeeded'
        state.topMangas = action.payload
      })
      .addCase(fetchTopMangas.rejected, (state, action) => {
        handleRejected(state, action, 'topStatus')
      })

      // Fetch list
      .addCase(fetchMangaList.pending, (state) =>
        handlePending(state, 'status')
      )
      .addCase(fetchMangaList.fulfilled, (state, action) =>
        handleFulfilled(state, action, 'list', 'status')
      )
      .addCase(fetchMangaList.rejected, (state, action) =>
        handleRejected(state, action, 'status')
      )

      // Fetch by id
      .addCase(fetchMangaById.pending, (state) =>
        handlePending(state, 'selectedStatus')
      )
      .addCase(fetchMangaById.fulfilled, (state, action) =>
        handleFulfilled(state, action, 'selected', 'selectedStatus')
      )
      .addCase(fetchMangaById.rejected, (state, action) =>
        handleRejected(state, action, 'selectedStatus')
      )
  },
})

export const { clearSelected } = mangaSlice.actions
export default mangaSlice.reducer
