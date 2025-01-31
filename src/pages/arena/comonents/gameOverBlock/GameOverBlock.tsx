import {FC} from 'react';

import s from './GameOverBlock.module.css';

interface IGameOverBlock {
    userStateHP: number;
    goblinStateHP: number;
    restartButtonHandler: () => void
}

export const GameOverBlock:FC<IGameOverBlock> = ({
  userStateHP,
  goblinStateHP,
  restartButtonHandler,
}) => {
  return (
    <div className={s.gameOverBlockContainer}>
      <h2>{userStateHP <= 0 ? 'Goblin Wins!' : goblinStateHP <= 0 ? 'User Wins!' : 'Game Over!'}</h2>
      <button onClick={restartButtonHandler} className={s.buttonBack}>Restart</button>
    </div>
  );
};
