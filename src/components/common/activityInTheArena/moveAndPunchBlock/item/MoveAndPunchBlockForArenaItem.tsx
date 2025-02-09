import {FC} from 'react';

import {useResetSelectionForArenaItem} from '../hook/useResetSelectionForArenaItem.ts';

import s from './MoveAndPunchBlockForArenaItem.module.css';

import {useAppDispatch, useAppSelector} from '@/store';
import {buttonsForActivityInArenaType} from '@/common/dataSet';
import {userMove, userPunch} from '@/pages/arena/reducer/fightSlice.ts';

import {UIButton} from '@/components/common';
import {DirectionType} from '@/common/types';

interface IMoveAndPunchBlockForArenaItem {
    item: buttonsForActivityInArenaType
    action: 'Move' | 'Punch'
    onAction?: (action: 'Move' | 'Punch', value: DirectionType) => void;
    disabled?: boolean;
}

/**
 * Компонент, отображающий отдельную кнопку для действия арены.
 *
 * При клике кнопка вызывает внешний обработчик onAction, если он передан, или выполняет действие через Redux dispatch.
 *
 * @component
 * @param {IMoveAndPunchBlockForArenaItem} props - Свойства компонента.
 * @param {buttonsForActivityInArenaType} props.item - Объект с данными кнопки (например, id, value, url).
 * @param {'Move'|'Punch'} props.action - Тип действия для кнопки.
 * @param {(action: 'Move' | 'Punch', value: DirectionType) => void} [props.onAction] - Опциональный обработчик клика,
 * который вызывается при выборе кнопки. При наличии вызывается вместо dispatch..
 * @param {boolean} [props.disabled] - Опциональный флаг, который отключает данную кнопку.
 *
 * @example
 * // Пример использования:
 * const buttonItem = { id: 'left', value: 'left', url: '/images/left.png' };
 * <MoveAndPunchBlockForArenaItem
 *   item={buttonItem}
 *   action="Move"
 *   onAction={(action, value) => console.log(`${action}: ${value}`)}
 *   disabled={false}
 * />
 *
 * @returns {JSX.Element} Отрендеренная кнопка для выбранного действия.
 */
export const MoveAndPunchBlockForArenaItem:FC<IMoveAndPunchBlockForArenaItem> = ({
  item,
  action,
  onAction,
  disabled,
}: IMoveAndPunchBlockForArenaItem): JSX.Element => {
  const dispatch = useAppDispatch();

  const {hasMoved, hasAttacked} = useAppSelector(state => state.arenaReducer);

  const {isSelected} = useResetSelectionForArenaItem(action, item);

  const moveEventClickHandler = () => {
    if (onAction) {
      onAction(action, item.value);
    } else {
      if (action === 'Move' && !hasMoved) {
        dispatch(userMove(item.value));
      } else if (action === 'Punch' && !hasAttacked) {
        dispatch(userPunch(item.value));
      }
    }
  };

  const isDisabled = disabled !== undefined
    ? disabled
    : (action === 'Move' ? hasMoved : hasAttacked);

  return (
    <UIButton variant={'icon'} onClick={moveEventClickHandler} isSelected={isSelected} disabled={isDisabled}>
      <img src={item.url} alt={item.value} className={s.arrowImage}/>
    </UIButton>
  );
};
