import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Dispatch } from 'redux';
import { apiSlice } from '../api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

 
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
export type AppDispatch = Dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
