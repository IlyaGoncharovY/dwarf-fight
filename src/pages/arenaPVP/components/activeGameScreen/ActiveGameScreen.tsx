import {FC} from 'react';

import s from './ActiveGameScreen.module.css';

import {IGameData} from '@/common/types';
import {FightWebSocket} from '@/pages/arenaPVP/reducer/fightWebSocket.ts';
import {ArenaPvpItem} from '@/pages/arenaPVP/item/ArenaPVPItem.tsx';

interface IActiveGameScreen {
    turnCount: number;
    player: IGameData['player'];
    opponent: IGameData['opponent'];
    wsClient: FightWebSocket;
}

export const ActiveGameScreen:FC<IActiveGameScreen> = ({
  turnCount,
  player,
  opponent,
  wsClient,
}) => {
  return (
    <>
      <h3 className={s.turnCountContainer}>Turn: {turnCount} / 15</h3>
      <ArenaPvpItem player={player} opponent={opponent} wsClient={wsClient} />
    </>
  );
};
