import { FC, useEffect, useState } from 'react';

import { FightWebSocket } from '@/pages/arenaPVP/reducer/fightWebSocket';
import { ArenaPvpItem } from '@/pages/arenaPVP/item/ArenaPVPItem.tsx';

interface IArenaPVP {
  onNavigate: (path: string) => void;
}

export const ArenaPVP: FC<IArenaPVP> = ({ onNavigate }) => {
  const [playerId] = useState(`player_${Math.random().toString(36).substr(2, 9)}`);
  const [gameData, setGameData] = useState<any>(null);
  const [wsClient, setWsClient] = useState<FightWebSocket | null>(null);

  useEffect(() => {
    const ws = new FightWebSocket(playerId, (data) => {
      setGameData(data);
    });

    setWsClient(ws);
    return () => ws.close();
  }, [playerId]);

  return (
    <div>
      <h2>Arena PVP</h2>

      {!gameData ? (
        <button disabled>Подключение...</button>
      ) : (
        <>
          <h3>Ход: {gameData.turnCount} / 15</h3>

          {gameData.gameOver ? (
            <h2 style={{ color: 'red' }}>
              {gameData.result ? gameData.result : 'Игра окончена!'}
            </h2>
          ) : (
            gameData.player &&
                  gameData.opponent &&
                  wsClient && (
              <ArenaPvpItem player={gameData.player} opponent={gameData.opponent} wsClient={wsClient} />
            )
          )}
        </>
      )}

      <button onClick={() => onNavigate('/')}>back</button>
    </div>
  );
};
