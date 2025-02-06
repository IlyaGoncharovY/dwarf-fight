import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type DirectionType = 'left' | 'right' | 'center';

export interface FighterState {
    id: string;
    hp: number;
    damage: number;
    move: DirectionType;
    setDamage: DirectionType;
}

export const fightSlicePVPApi = createApi({
  reducerPath: 'fightSlicePVPApi',
  tagTypes: ['GameState'],
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://jobtracker-l44k.onrender.com/api/game',
    baseUrl: 'http://localhost:8000/api/game',
  }),
  endpoints: (builder) => ({

  }),
});
