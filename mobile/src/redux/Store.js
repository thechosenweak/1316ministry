import { configureStore } from '@reduxjs/toolkit';
import CardDataSlice from './CounterSlice';

export const Store = configureStore({
  reducer: {
    cardData: CardDataSlice
  },
})
