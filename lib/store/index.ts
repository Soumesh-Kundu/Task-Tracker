import { configureStore } from '@reduxjs/toolkit';
import { taskModalReducer } from './slice/taskModal';

export const store= configureStore({
  reducer: {
    crypto:taskModalReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;