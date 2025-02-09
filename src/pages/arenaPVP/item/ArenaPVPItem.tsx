import {FC} from 'react';

import s from './ArenaPVPItem.module.css';

import {FightWebSocket} from '@/pages/arenaPVP/reducer/fightWebSocket';
import {DirectionType, FighterState} from '@/common/types';
import {MoveAndPunchBlockForArena, UnitIcon} from '@/components/common';
import playerPVPImg from '@/assets/images/playerPVP.png';
import opponentPVPImg from '@/assets/images/opponentPVPIMG.png';
import {isHitCheck} from '@/pages/arenaPVP/utils/isHitCheck.ts';

interface IArenaPvpItem {
    player: FighterState;
    opponent: FighterState;
    wsClient: FightWebSocket;
}

export const ArenaPvpItem: FC<IArenaPvpItem> = ({
  player,
  opponent,
  wsClient,
}) => {

  const handleAction = (action: 'Move' | 'Punch', value: DirectionType) => {
    if (wsClient) {
      if (action === 'Move') {
        wsClient.sendMove(value);
      } else if (action === 'Punch') {
        wsClient.sendPunch(value);
      }
    }
  };

  const isHitPlayer: boolean = isHitCheck(player.move, opponent.setDamage);
  const isHitOpponent: boolean = isHitCheck(opponent.move, player.setDamage);

  return (
    <div className={s.arenaPVPItemContainer}>
      <div className={s.playersContainer}>
        <UnitIcon
          imgUrl={playerPVPImg}
          alt={'player'}
          hp={player.hp}
          userName={player.id}
          isHit={isHitPlayer}
        />
        <UnitIcon
          imgUrl={opponentPVPImg}
          alt={'opponent'}
          hp={opponent.hp}
          userName={opponent.id}
          isHit={isHitOpponent}
        />
      </div>
      <MoveAndPunchBlockForArena
        title="Move"
        action="Move"
        onAction={wsClient ? handleAction : undefined}
        disabled={player.move !== null}
      />
      <MoveAndPunchBlockForArena
        title="Punch"
        action="Punch"
        onAction={wsClient ? handleAction : undefined}
        disabled={player.setDamage !== null}
      />
    </div>
  );
};
