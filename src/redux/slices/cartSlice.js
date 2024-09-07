import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItems(state, action) {
      state.items.push(action.payload);
    },
    removeItems(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearItems(state, action) {
      state.items = [];
    },
  },
});

export const { addItmes, removeItems, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
