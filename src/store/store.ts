import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';

import fightSlice from '../pages/arena/reducer/fightSlice.ts';
import audioSlice from '../components/common/wrapper/reducer/audioSlice.ts';

import {fightSlicePVPApi} from '@/pages/arenaPVP/reducer/fightSlicePVPApi.ts';

export const store = configureStore({
  reducer: {
    [fightSlicePVPApi.reducerPath]: fightSlicePVPApi.reducer,
    arenaReducer: fightSlice,
    wrapperReducer: audioSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fightSlicePVPApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
