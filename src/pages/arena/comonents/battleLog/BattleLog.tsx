import {FC, useEffect, useRef} from 'react';

import s from './BattleLog.module.css';

interface IBattleLog {
    logMessages: string[]
}

export const BattleLog:FC<IBattleLog> = ({
  logMessages,
}) => {

  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logMessages]);

  return (
    <div className={s.battleLog} ref={logContainerRef}>
      {logMessages.map((msg, index) => (
        <p key={index} className={s.hitMessage}>{msg}</p>
      ))}
    </div>
  );
};
