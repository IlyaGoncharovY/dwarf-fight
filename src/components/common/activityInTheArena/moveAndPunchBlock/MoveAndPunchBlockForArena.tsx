import {FC} from 'react';

import {buttonsForActivityInArena} from '../../../../common/dataSet';

import {MoveAndPunchBlockForArenaItem} from './item/MoveAndPunchBlockForArenaItem.tsx';

import s from './MoveAndPunchBlockForArena.module.css';

interface IMoveAndPunchBlockForArena {
  title: string
  action: 'Move' | 'Punch'
}

export const MoveAndPunchBlockForArena: FC<IMoveAndPunchBlockForArena> = ({
  title,
  action,
}) => {
  return (
    <div className={s.blockArenaContainer}>
      <p>{title}</p>
      {buttonsForActivityInArena.map(item =>
        <MoveAndPunchBlockForArenaItem
          key={item.id}
          item={item}
          action={action}
        />)}
    </div>
  );
};
