import { configureStore } from '@reduxjs/toolkit';
import AppDataSlice from './AppDataSlice';

export const Store = configureStore({
  reducer: {
    appData: AppDataSlice
  },
})
