import { createSlice } from '@reduxjs/toolkit'
import { fetchMangaList } from './manga.thunk'

const mangaSlice = createSlice({
  name: 'manga',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMangaList.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchMangaList.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.list = action.payload
      })
      .addCase(fetchMangaList.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default mangaSlice.reducer
