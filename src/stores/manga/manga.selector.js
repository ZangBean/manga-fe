import { createSelector } from '@reduxjs/toolkit'

const selectMangaState = (state) => state.manga

export const selectMangaList = (state) => selectMangaState(state).list
export const selectMangaStatus = (state) => selectMangaState(state).status
export const selectSelectedManga = (state) => selectMangaState(state).selected
export const selectSelectedMangaStatus = (state) =>
  selectMangaState(state).selectedStatus
export const selectMangaError = (state) => selectMangaState(state).error

// export const selectMangaById = createSelector(
//   [selectMangaList, (_, id) => id],
//   (list, id) => list.find((manga) => manga.id === id)
// )
