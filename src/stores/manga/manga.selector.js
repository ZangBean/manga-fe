import { createSelector } from '@reduxjs/toolkit'

const selectMangaState = (state) => state.manga

// Trang chủ: manga mới cập nhật
export const selectLatestMangas = (state) =>
  selectMangaState(state).latestMangas
export const selectLatestStatus = (state) =>
  selectMangaState(state).latestStatus

// Trang tất cả
export const selectPaginatedMangas = (state) =>
  selectMangaState(state).paginatedMangas
export const selectPagination = (state) => selectMangaState(state).pagination
export const selectPaginatedStatus = (state) =>
  selectMangaState(state).paginatedStatus

// List mangas
export const selectMangaList = (state) => selectMangaState(state).list
export const selectMangaStatus = (state) => selectMangaState(state).status

// Details of selected manga
export const selectSelectedManga = (state) => selectMangaState(state).selected
export const selectSelectedMangaStatus = (state) =>
  selectMangaState(state).selectedStatus

// Error
export const selectMangaError = (state) => selectMangaState(state).error

// Top mangas
export const selectTopMangas = (state) => selectMangaState(state).topMangas
export const selectTopStatus = (state) => selectMangaState(state).topStatus

// export const selectMangaById = createSelector(
//   [selectMangaList, (_, id) => id],
//   (list, id) => list.find((manga) => manga.id === id)
// )
