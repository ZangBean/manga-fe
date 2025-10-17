import { createSelector } from '@reduxjs/toolkit'

const selectMangaState = (state) => state.manga

export const selectMangaList = createSelector(
  [selectMangaState],
  (manga) => manga.list
)

export const selectMangaStatus = createSelector(
  [selectMangaState],
  (manga) => manga.status
)
