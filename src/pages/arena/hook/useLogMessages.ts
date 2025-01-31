import {useEffect, useState} from 'react';

import {useAppSelector} from '../../../store';

interface IUseLogMessagesReturnsParams {
  logMessages: string[];
  setLogMessages: (value: string[]) => void;
}

/**
 * useLogMessages - Кастомный хук для хранения и обновления журнала сообщений о результатах ходов в бою.
 * Добавляет в лог информацию о попаданиях пользователя по гоблину и наоборот.
 *
 * @returns {IUseLogMessagesReturnsParams} Объект с сообщениями журнала и функцией для их очистки.
 * @property {string[]} logMessages - Массив строк с сообщениями о результатах боя.
 * @property {Function} setLogMessages - Функция для очистки или обновления списка сообщений.
 *
 * @example
 * const { logMessages, setLogMessages } = useLogMessages();
 *
 * // Очистка журнала перед рестартом игры
 * setLogMessages([]);
 */
export const useLogMessages = (): IUseLogMessagesReturnsParams => {

  const {
    userHitGoblin,
    goblinHitUser,
  } = useAppSelector(state => state.arenaReducer);

  const [logMessages, setLogMessages] = useState<string[]>([]);


  useEffect(() => {
    if (userHitGoblin) {
      setLogMessages(prev => [...prev, '✅ You hit the Goblin!']);
    }
    if (goblinHitUser) {
      setLogMessages(prev => [...prev, '❌ Goblin hit you!']);
    }
  }, [userHitGoblin, goblinHitUser]);

  return {
    logMessages,
    setLogMessages,
  };
};
