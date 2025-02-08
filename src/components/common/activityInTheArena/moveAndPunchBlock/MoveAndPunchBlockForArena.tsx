import {FC} from 'react';

import {MoveAndPunchBlockForArenaItem} from './item/MoveAndPunchBlockForArenaItem.tsx';

import s from './MoveAndPunchBlockForArena.module.css';

import {buttonsForActivityInArena} from '@/common/dataSet';
import {DirectionType} from '@/common/types';

interface IMoveAndPunchBlockForArena {
  title: string
  action: 'Move' | 'Punch'
  onAction?: (action: 'Move' | 'Punch', value: DirectionType) => void;
  disabled?: boolean;
}

/**
 * Компонент, отображающий блок кнопок для действий арены.
 *
 * Отрисовывает заголовок и для каждого элемента из массива buttonsForActivityInArena
 * рендерит компонент MoveAndPunchBlockForArenaItem.
 *
 * @component
 * @param {IMoveAndPunchBlockForArena} props - Свойства компонента.
 * @param {string} props.title - Тайтл для всего блока кнопок.
 * @param {'Move' | 'Punch'} props.action - выбор действия 'Move' | 'Punch'.
 * @param {(action: 'Move' | 'Punch', value: DirectionType) => void} [props.onAction] - Опциональный обработчик клика,
 * который вызывается при выборе кнопки. При наличии вызывается вместо стандартного dispatch.
 * @param {boolean} [props.disabled] - Опциональный флаг, который отключает все кнопки в блоке.
 *
 * @example
 * // Пример использования с внешним обработчиком (например, с wsClient):
 * <MoveAndPunchBlockForArena
 *   title="Move"
 *   action="Move"
 *   onAction={(action, value) => wsClient.sendMove(value)}
 *   disabled={player.move !== null}
 * />
 *
 * // Пример использования со стандартной логикой (через Redux dispatch, onAction не передаётся):
 * <MoveAndPunchBlockForArena
 *   title="Punch"
 *   action="Punch"
 *   disabled={player.setDamage !== null}
 * />
 *
 * @returns {JSX.Element} Отрендеренный блок с кнопками.
 */
export const MoveAndPunchBlockForArena: FC<IMoveAndPunchBlockForArena> = ({
  title,
  action,
  onAction,
  disabled,
}: IMoveAndPunchBlockForArena): JSX.Element => {
  return (
    <div className={s.blockArenaContainer}>
      <p>{title}</p>
      {buttonsForActivityInArena.map(item =>
        <MoveAndPunchBlockForArenaItem
          key={item.id}
          item={item}
          action={action}
          onAction={onAction}
          disabled={disabled}
        />)}
    </div>
  );
};
