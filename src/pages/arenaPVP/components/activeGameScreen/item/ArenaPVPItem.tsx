import {FC} from 'react';

import s from './ArenaPVPItem.module.css';

import {FightWebSocket} from '@/pages/arenaPVP/reducer/fightWebSocket.ts';
import {DirectionType, FighterState} from '@/common/types';
import {MoveAndPunchBlockForArena, UnitIcon} from '@/components/common';
import playerPVPImg from '@/assets/images/playerPVP.png';
import opponentPVPImg from '@/assets/images/opponentPVPIMG.png';
import {useCheckDamageUser} from '@/pages/arenaPVP/hook';

interface IArenaPvpItem {
    player: FighterState;
    opponent: FighterState;
    wsClient: FightWebSocket;
    turnCount: number;
}

export const ArenaPvpItem: FC<IArenaPvpItem> = ({
  player,
  opponent,
  wsClient,
  turnCount,
}) => {

  const {localPlayerHit, localOpponentHit} = useCheckDamageUser({
    turnCount: turnCount,
    playerIsHit: player.isHit,
    opponentIsHit: opponent.isHit,
  });

  const handleAction = (action: 'Move' | 'Punch', value: DirectionType) => {
    if (wsClient) {
      if (action === 'Move') {
        wsClient.sendMove(value);
      } else if (action === 'Punch') {
        wsClient.sendPunch(value);
      }
    }
  };

  return (
    <div className={s.arenaPVPItemContainer}>
      <div className={s.playersContainer}>
        <UnitIcon
          imgUrl={playerPVPImg}
          alt={'player'}
          hp={player.hp}
          userName={player.id}
          isHit={localPlayerHit}
        />
        <UnitIcon
          imgUrl={opponentPVPImg}
          alt={'opponent'}
          hp={opponent.hp}
          userName={opponent.id}
          isHit={localOpponentHit}
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
