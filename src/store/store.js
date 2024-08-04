import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/authSlice'
import socialSlice from './features/socialSlice'

export const store = configureStore({
  reducer: {
    auth : authSlice,
    social : socialSlice
  },
});

store.subscribe(()=>console.log(store.getState()))