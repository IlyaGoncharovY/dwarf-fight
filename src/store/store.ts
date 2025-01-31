import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';

import fightSlice from '../pages/arena/reducer/fightSlice.ts';

export const store = configureStore({
  reducer: {
    arenaReducer: fightSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
