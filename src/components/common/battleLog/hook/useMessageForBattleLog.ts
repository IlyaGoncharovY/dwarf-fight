import {ChangeEvent, useState} from 'react';

import {FightWebSocket} from '@/pages/arenaPVP/reducer/fightWebSocket.ts';

type ReturnParamsType = {
  message: string,
  handleSendMessage: () => void,
  onChangeInputHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

/**
 * useMessageForBattleLog - Кастомный хук для управления отправкой сообщений в чат.
 *
 * @param {FightWebSocket} [wsClient] - Состояние для WS подключения.
 *
 * @returns {ReturnParamsType} Объект, содержащий:
 *   - {string} message - Сообщение.
 *   - {() => void} handleSendMessage - Функция для отправки сообщения.
 *   - {(e: ChangeEvent<HTMLInputElement>) => void} onChangeInputHandler - Функция-слушатель для инпута.
 *
 * @example
 *   const {
 *     message,
 *     onChangeInputHandler,
 *     handleSendMessage,
 *   } = useMessageForBattleLog(wsClient);
 *
 *   return (
 *     <>
 *       <input
 *         type="text"
 *         value={message}
 *         onChange={onChangeInputHandler}
 *         placeholder="..."/>
 *       <button onClick={handleSendMessage}>Отправить</button>
 *     </>
 *   );
 */
export const useMessageForBattleLog = ( wsClient?: FightWebSocket): ReturnParamsType => {

  const [message, setMessage] = useState<string>('');

  const handleSendMessage = () => {
    if (message.trim() && wsClient) {
      wsClient.sendChatMessage(message);
      setMessage('');
    }
  };

  const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value);
  };

  return {
    message,
    handleSendMessage,
    onChangeInputHandler,
  };
};
