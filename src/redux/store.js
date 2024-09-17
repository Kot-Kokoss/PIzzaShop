import { configureStore } from '@reduxjs/toolkit';
import pizzaSlice from './slices/pizzaSlice';
import filterReducer from './slices/filterSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    pizza: pizzaSlice,
    filter: filterReducer,
    cart: cartReducer,
  },
});
