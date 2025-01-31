import {createSlice, PayloadAction} from '@reduxjs/toolkit';

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
};

const fightSlice = createSlice({
  name: 'fight',
  initialState,
  reducers: {
    userMove(state, action: PayloadAction<DirectionType>) {
      if (state.gameOver || state.hasMoved) return;

      state.userState.move = action.payload;
      state.hasMoved = true;

      if (state.hasMoved && state.hasAttacked) {
        fightSlice.caseReducers.nextTurn(state);
      }
    },
    userPunch(state, action: PayloadAction<DirectionType>) {
      if (state.gameOver || state.hasAttacked) return;

      state.userState.setDamage = action.payload;
      state.userHitGoblin = false;
      state.goblinHitUser = false;

      // Генерация движения и атаки гоблина
      state.goblinState.move = getRandomDirection();
      state.goblinState.setDamage = getRandomDirection();

      // Проверка попадания
      if (state.userState.setDamage === state.goblinState.move) {
        state.goblinState.hp -= state.userState.damage;
        state.userHitGoblin = true;
      }
      if (state.goblinState.setDamage === state.userState.move) {
        state.userState.hp -= state.goblinState.damage;
        state.goblinHitUser = true;
      }

      state.hasAttacked = true;

      // Если и перемещение, и атака уже сделаны → завершаем ход
      if (state.hasMoved && state.hasAttacked) {
        fightSlice.caseReducers.nextTurn(state);
      }
    },
    nextTurn(state) {
      if (!state.hasMoved || !state.hasAttacked || state.gameOver) return;

      state.hasMoved = false;
      state.hasAttacked = false;
      state.turnCount += 1;

      // Проверка окончания игры
      if (state.turnCount >= state.maxTurns || state.userState.hp <= 0 || state.goblinState.hp <= 0) {
        state.gameOver = true;
      }
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
    },
  },
});

export const { userMove, userPunch, restartGame } = fightSlice.actions;
export default fightSlice.reducer;
