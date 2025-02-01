import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

export type DirectionType = 'left' | 'right' | 'center';

interface FighterState {
  hp: number;
  damage: number;
  move: DirectionType;
  setDamage: DirectionType;
}

interface FightState {
  goblinState: FighterState;
  userState: FighterState;
  turnCount: number;
  maxTurns: number;
  gameOver: boolean;
  userHitGoblin: boolean;
  goblinHitUser: boolean;
  hasMoved: boolean;
  hasAttacked: boolean;
  selectedMove: DirectionType | null;
  selectedPunch: DirectionType | null;
}

const getRandomDirection = (): DirectionType => {
  const directions: DirectionType[] = ['left', 'right', 'center'];
  return directions[Math.floor(Math.random() * directions.length)];
};

const initialState: FightState = {
  goblinState: {
    hp: 5,
    damage: 1,
    move: 'center',
    setDamage: 'center',
  },
  userState: {
    hp: 5,
    damage: 1,
    move: 'center',
    setDamage: 'center',
  },
  turnCount: 0,
  maxTurns: 15,
  gameOver: false,
  userHitGoblin: false,
  goblinHitUser: false,
  hasMoved: false,
  hasAttacked: false,
  selectedMove: null,
  selectedPunch: null,
};

const fightSlice = createSlice({
  name: 'fight',
  initialState,
  reducers: {
    userMove(state, action: PayloadAction<DirectionType>) {
      if (state.gameOver || state.hasMoved) return;

      state.userState.move = action.payload;
      state.selectedMove = action.payload;
      state.hasMoved = true;

      if (state.hasMoved && state.hasAttacked) {
        fightSlice.caseReducers.nextTurn(state);
      }
    },
    userPunch(state, action: PayloadAction<DirectionType>) {
      if (state.gameOver || state.hasAttacked) return;

      state.userState.setDamage = action.payload;
      state.selectedPunch = action.payload;
      state.userHitGoblin = false;
      state.goblinHitUser = false;

      state.goblinState.move = getRandomDirection();
      state.goblinState.setDamage = getRandomDirection();

      if (state.userState.setDamage === state.goblinState.move) {
        state.goblinState.hp -= state.userState.damage;
        state.userHitGoblin = true;
      }
      if (state.goblinState.setDamage === state.userState.move) {
        state.userState.hp -= state.goblinState.damage;
        state.goblinHitUser = true;
      }

      state.hasAttacked = true;

      if (state.hasMoved && state.hasAttacked) {
        fightSlice.caseReducers.nextTurn(state);
      }
    },
    nextTurn(state) {
      if (!state.hasMoved || !state.hasAttacked || state.gameOver) return;

      state.hasMoved = false;
      state.hasAttacked = false;
      state.turnCount += 1;

      if (state.turnCount >= state.maxTurns || state.userState.hp <= 0 || state.goblinState.hp <= 0) {
        state.gameOver = true;
      }
    },
    resetSelection(state) {
      state.selectedMove = null;
      state.selectedPunch = null;
    },
    restartGame(state) {
      state.goblinState.hp = 5;
      state.userState.hp = 5;
      state.turnCount = 0;
      state.gameOver = false;
      state.userHitGoblin = false;
      state.goblinHitUser = false;
      state.hasMoved = false;
      state.hasAttacked = false;
      state.selectedMove = null;
      state.selectedPunch = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetSelectionWithDelay.fulfilled, (state) => {
      state.selectedMove = null;
      state.selectedPunch = null;
    });
  },
});

/**
 * Санка для сброса выбранных кнопок через 500ms после завершения хода.
 */
export const resetSelectionWithDelay = createAsyncThunk(
  'fight/resetSelectionWithDelay',
  async (_, { dispatch }) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    dispatch(fightSlice.actions.resetSelection());
  },
);

export const { userMove, userPunch, restartGame } = fightSlice.actions;
export default fightSlice.reducer;
