import {FC, useEffect, useRef} from 'react';

import s from './BattleLog.module.css';

import {FightWebSocket} from '@/pages/arenaPVP/reducer/fightWebSocket.ts';
import {UIButton} from '@/components/common';
import {useMessageForBattleLog} from '@/components/common/battleLog/hook/useMessageForBattleLog.ts';

interface IBattleLog {
    logMessages: string[];
    wsClient?: FightWebSocket
}

/**
 * BattleLog — компонент для отображения журнала битвы и отправки сообщений через WebSocket.
 *
 * @component
 * @example
 * ```tsx
 * import { BattleLog } from './BattleLog';
 * import { FightWebSocket } from '@/pages/arenaPVP/reducer/fightWebSocket.ts';
 *
 * const messages = [
 *   "Игрок 1 попал в игрока 2",
 *   "Игрок 2 попал в игрока 1",
 * ];
 *
 * const wsClient = new FightWebSocket('wss://example.com/socket');
 *
 * <BattleLog logMessages={messages} wsClient={wsClient} />;
 * ```
 *
 * @param {IBattleLog} props - Свойства компонента.
 * @param {string[]} props.logMessages - Массив сообщений журнала битвы.
 * @param {FightWebSocket} [props.wsClient] - Опционально экземпляр WebSocket-клиента для отправки сообщений.
 * @returns {JSX.Element} JSX-элемент журнала битвы.
 */
export const BattleLog:FC<IBattleLog> = ({
  logMessages,
  wsClient,
}: IBattleLog): JSX.Element => {

  const {
    message,
    onChangeInputHandler,
    handleSendMessage,
  } = useMessageForBattleLog(wsClient);

  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logMessages]);

  return (
    <div className={s.battleLogContainer}>
      <div className={s.battleLog} ref={logContainerRef}>
        {logMessages?.map((msg, index) => (
          <p key={index} className={s.hitMessage}>{msg}</p>
        ))}
      </div>
      {wsClient &&
                <div className={s.inputContainer}>
                  <input
                    type="text"
                    value={message}
                    onChange={onChangeInputHandler}
                    placeholder="..."/>
                  <UIButton
                    variant={'header'}
                    onClick={handleSendMessage}>Отправить</UIButton>
                </div>}
    </div>
  );
};
