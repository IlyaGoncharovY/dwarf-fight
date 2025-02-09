import {useEffect, useState} from 'react';

import {IGameData, Nullable} from '@/common/types';
import {FightWebSocket} from '@/pages/arenaPVP/reducer/fightWebSocket.ts';

interface returnParamsUseArenaPVP {
  gameData: Nullable<IGameData>
  wsClient: Nullable<FightWebSocket>
}

/**
 * Кастомный хук для обработки WS клиента.
 * Для PVP фарены.
 * @returns {Nullable<IGameData>} gameData - данные для рендера игровой информации.
 * @returns {Nullable<FightWebSocket>} wsClient - Класс для работы с WebSocket-соединением в игре.
 */
export const useArenaPVP = (): returnParamsUseArenaPVP => {
  const [playerId] = useState(`player_${Math.random().toString(36).substr(2, 9)}`);
  const [gameData, setGameData] = useState<Nullable<IGameData>>(null);
  const [wsClient, setWsClient] = useState<Nullable<FightWebSocket>>(null);

  useEffect(() => {
    const ws = new FightWebSocket(playerId, (data) => {
      setGameData(data);
    });

    setWsClient(ws);
    return () => ws.close();
  }, [playerId]);

  return {
    gameData,
    wsClient,
  };
};
