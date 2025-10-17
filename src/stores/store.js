import { configureStore } from '@reduxjs/toolkit'
import mangaReducer from '@/stores/manga/manga.slice'

export const store = configureStore({
  reducer: {
    manga: mangaReducer,
  },
})

export default store
