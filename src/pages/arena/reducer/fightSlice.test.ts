import { describe, it, expect } from 'vitest';

import fightReducer, { userMove, userPunch, restartGame, resetSelectionWithDelay } from './fightSlice';
import { DirectionType } from './fightSlice';

const createInitialState = () => ({
  goblinState: {
    hp: 5,
    damage: 1,
    move: 'center' as DirectionType,
    setDamage: 'center' as DirectionType,
  },
  userState: {
    hp: 5,
    damage: 1,
    move: 'center' as DirectionType,
    setDamage: 'center' as DirectionType,
  },
  turnCount: 0,
  maxTurns: 15,
  gameOver: false,
  userHitGoblin: false,
  goblinHitUser: false,
  hasMoved: false,
  hasAttacked: false,
  selectedMove: null as DirectionType | null,
  selectedPunch: null as DirectionType | null,
});

describe('fightSlice Reducer Tests', () => {
  it('должен вернуть начальное состояние', () => {
    expect(fightReducer(undefined, { type: 'unknown' })).toEqual(createInitialState());
  });

  it('должен изменять направление движения игрока при userMove', () => {
    const initialState = createInitialState();
    const newState = fightReducer(initialState, userMove('left'));

    expect(newState.userState.move).toBe('left');
    expect(newState.selectedMove).toBe('left');
    expect(newState.hasMoved).toBe(true);
  });

  it('должен изменять атаку игрока при userPunch', () => {
    const initialState = createInitialState();
    const newState = fightReducer(initialState, userPunch('right'));

    expect(newState.userState.setDamage).toBe('right');
    expect(newState.selectedPunch).toBe('right');
    expect(newState.hasAttacked).toBe(true);
  });

  it('не должен изменять состояние, если игра завершена', () => {
    const initialState = { ...createInitialState(), gameOver: true };
    const newState = fightReducer(initialState, userMove('left'));

    expect(newState).toEqual(initialState);
  });

  it('должен сбрасывать состояние при restartGame', () => {
    const modifiedState = { ...createInitialState(), turnCount: 5, userState:
          { ...createInitialState().userState, hp: 2 } };
    const newState = fightReducer(modifiedState, restartGame());

    expect(newState).toEqual(createInitialState());
  });

  it('должен сбрасывать выделенные кнопки через resetSelectionWithDelay', async () => {
    const initialState = {
      ...createInitialState(),
      selectedMove: 'left' as DirectionType,
      selectedPunch: 'right' as DirectionType,
    };

    const newState = fightReducer(initialState, resetSelectionWithDelay.fulfilled(undefined, '', undefined));

    expect(newState.selectedMove).toBe(null);
    expect(newState.selectedPunch).toBe(null);
  });
});
