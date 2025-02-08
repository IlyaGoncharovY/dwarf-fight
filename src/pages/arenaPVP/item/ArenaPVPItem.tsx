import {FC} from 'react';

import {FightWebSocket} from '@/pages/arenaPVP/reducer/fightWebSocket';
import {DirectionType, FighterState} from '@/common/types';
import {MoveAndPunchBlockForArena} from '@/components/common';

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

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h3>Вы: {player.id}</h3>
      <p>Ваш HP: {player.hp}</p>
      <h3>Противник: {opponent.id}</h3>
      <p>HP противника: {opponent.hp}</p>
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
