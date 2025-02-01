import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';

import fightSlice from '../pages/arena/reducer/fightSlice.ts';
import audioSlice from '../components/common/wrapper/reducer/audioSlice.ts';

export const store = configureStore({
  reducer: {
    arenaReducer: fightSlice,
    wrapperReducer: audioSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
