import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';

import incomeReducer from '../features/income/incomeSlice'


export const store = configureStore({
  reducer: {
    income: incomeReducer,
  },
});


export const { dispatch, getState } = store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
