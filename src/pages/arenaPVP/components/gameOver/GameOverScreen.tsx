import {FC} from 'react';

import s from './GameOverScreen.module.css';

interface IGameOverScreen {
    turnCount: number;
    result?: string;
}

export const GameOverScreen: FC<IGameOverScreen> = ({
  turnCount,
  result,
}) => (
  <>
    <h3 className={s.countTurnContainer}>Turn: {turnCount} / 15</h3>
    <h2 className={s.resultContainer}>{result ?? 'Game over!'}</h2>
  </>
);
