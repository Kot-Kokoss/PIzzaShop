import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortAscDesc: 'desc',
  sortType: {
    name: 'рейтингу',
    sortProperty: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortAscDesc(state, action) {
      state.sortAscDesc = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
  },
});

export const { setCategoryId, setSortAscDesc, setSortType } = filterSlice.actions;
export default filterSlice.reducer;
