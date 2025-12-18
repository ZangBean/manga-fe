import { createSlice } from '@reduxjs/toolkit'
import { fetchMangaList, fetchMangaById, fetchTopMangas } from './manga.thunk'

const initialState = {
  list: [],
  selected: null,
  topMangas: [],
  topStatus: 'idle',
  status: 'idle',
  selectedStatus: 'idle',
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
