import {FC} from 'react';

import {FightWebSocket} from '@/pages/arenaPVP/reducer/fightWebSocket';
import {FighterState} from '@/common/types';

interface IArenaPvpItem {
    player: FighterState;
    opponent: FighterState;
    wsClient: FightWebSocket;
}

export const ArenaPvpItem: FC<IArenaPvpItem> = ({ player, opponent, wsClient }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h3>Вы: {player.id}</h3>
      <p>Ваш HP: {player.hp}</p>
      <h3>Противник: {opponent.id}</h3>
      <p>HP противника: {opponent.hp}</p>

      <div>
        <p>Движение</p>
        <button onClick={() => wsClient.sendMove('left')} disabled={player.move !== null}>Left</button>
        <button onClick={() => wsClient.sendMove('center')} disabled={player.move !== null}>Center</button>
        <button onClick={() => wsClient.sendMove('right')} disabled={player.move !== null}>Right</button>
      </div>

      <div>
        <p>Атака</p>
        <button onClick={() => wsClient.sendPunch('left')} disabled={player.setDamage !== null}>Left</button>
        <button onClick={() => wsClient.sendPunch('center')} disabled={player.setDamage !== null}>Center</button>
        <button onClick={() => wsClient.sendPunch('right')} disabled={player.setDamage !== null}>Right</button>
      </div>
    </div>
  );
};
