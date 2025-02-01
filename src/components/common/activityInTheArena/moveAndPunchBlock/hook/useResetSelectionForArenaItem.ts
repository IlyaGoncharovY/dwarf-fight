import {useEffect, useRef} from 'react';

import {resetSelectionWithDelay} from '../../../../../pages/arena/reducer/fightSlice.ts';
import {useAppDispatch, useAppSelector} from '../../../../../store';
import {buttonsForActivityInArenaType} from '../../../../../common/dataSet';

/**
 * useResetSelectionForArenaItem - Кастомный хук для управления выделением кнопок в `MoveAndPunchBlockForArenaItem`.
 *
 * Этот хук отслеживает, была ли выбрана кнопка (`Move` или `Punch`) и сбрасывает выделение
 * через 500ms после завершения хода, если `turnCount` увеличился.
 *
 * @param {'Move' | 'Punch'} action - Действие, к которому относится кнопка (`Move` или `Punch`).
 * @param {buttonsForActivityInArenaType} item - Объект кнопки с `id`, `value` и `url`.
 *
 * @returns {Object} Объект, содержащий флаг `isSelected`, который определяет, выбрана ли кнопка.
 *
 * @example
 * const { isSelected } = useResetSelectionForArenaItem('Move', item);
 *
 * return <UIButton isSelected={isSelected} />;
 */
export const useResetSelectionForArenaItem = (
  action: 'Move' | 'Punch',
  item: buttonsForActivityInArenaType,
): {isSelected: boolean} => {
  const {
    selectedMove,
    selectedPunch,
    turnCount,
  } = useAppSelector(state => state.arenaReducer);

  const dispatch = useAppDispatch();

  const prevTurnCount = useRef(turnCount);

  const isSelected =
        (action === 'Move' && selectedMove === item.value) ||
        (action === 'Punch' && selectedPunch === item.value);

  useEffect(() => {
    if (turnCount > prevTurnCount.current) {
      prevTurnCount.current = turnCount;
      dispatch(resetSelectionWithDelay());
    }
  }, [turnCount, dispatch]);

  return {
    isSelected,
  };
};
