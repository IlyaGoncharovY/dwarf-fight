import {FC} from 'react';

import {useResetSelectionForArenaItem} from '../hook/useResetSelectionForArenaItem.ts';

import s from './MoveAndPunchBlockForArenaItem.module.css';

import {useAppDispatch, useAppSelector} from '@/store';
import {buttonsForActivityInArenaType} from '@/common/dataSet';
import {userMove, userPunch} from '@/pages/arena/reducer/fightSlice.ts';

import {UIButton} from '@/components/common';

interface IMoveAndPunchBlockForArenaItem {
    item: buttonsForActivityInArenaType
    action: 'Move' | 'Punch'
}

export const MoveAndPunchBlockForArenaItem:FC<IMoveAndPunchBlockForArenaItem> = ({
  item,
  action,
}) => {
  const dispatch = useAppDispatch();

  const {hasMoved, hasAttacked} = useAppSelector(state => state.arenaReducer);

  const {isSelected} = useResetSelectionForArenaItem(action, item);

  const moveEventClickHandler = () => {
    if (action === 'Move' && !hasMoved) {
      dispatch(userMove(item.value));
    } else if (action === 'Punch' && !hasAttacked) {
      dispatch(userPunch(item.value));
    }
  };

  return (
    <UIButton variant={'icon'} onClick={moveEventClickHandler} isSelected={isSelected}>
      <img src={item.url} alt={item.value} className={s.arrowImage}/>
    </UIButton>
  );
};
