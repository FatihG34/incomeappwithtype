import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga'
import incomeReducer from '../features/income/incomeSlice'
// import { treeSaga } from '../saga/saga';
// const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    income: incomeReducer,
  },
  // middleware:[saga]
});

// saga.run(treeSaga)


export const { dispatch, getState } = store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
