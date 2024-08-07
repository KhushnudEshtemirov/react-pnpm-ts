import { configureStore } from '@reduxjs/toolkit';

import loginSlice from './loginSlice/loginSlice';

export const store = configureStore({
  reducer: {
    loginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
