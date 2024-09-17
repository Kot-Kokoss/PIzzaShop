import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzas',
  async ({ categoryId, sortAscDesc, sortType, currentPage }) => {
    const response = await axios.get(
      `https://6637bb3c288fedf693812f99.mockapi.io/pizza-react?page=${currentPage}&limit=8&${
        categoryId === 0 ? '' : `category=${categoryId}`
      }&sortBy=${sortType.sortProperty}&order=${sortAscDesc}`,
    );

    return response.data;
  },
);

const initialState = {
  items: [],
  status: 'pending',
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = 'pending';
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = 'fullfield';
        state.items = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = 'rejected';
        state.items = [];
      });
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
