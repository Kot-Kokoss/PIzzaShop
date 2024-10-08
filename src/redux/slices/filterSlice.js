import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sortAscDesc: 'desc',
  sortType: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortAscDesc(state, action) {
      state.sortAscDesc = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.sortAscDesc = action.payload.sortAscDesc;
      state.categoryId = Number(action.payload.categoryId);
      state.sortType = action.payload.sortType;
    },
  },
});

export const selectFilter = (state) => state.filter;

export const {
  setSearchValue,
  setCategoryId,
  setSortAscDesc,
  setSortType,
  setCurrentPage,
  setFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
