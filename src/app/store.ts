import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import eatReducer from "../features/eatSlice"

export const store = configureStore({
  reducer: {
    eat: eatReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
