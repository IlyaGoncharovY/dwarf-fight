import {FC} from 'react';

import {useAppDispatch, useAppSelector} from '../../../../../store';
import {buttonsForActivityInArenaType} from '../../../../../common/dataSet';
import {userMove, userPunch} from '../../../../../pages/arena/reducer/fightSlice.ts';

import {UIButton} from '../../../button/UIButton.tsx';

import s from './MoveAndPunchBlockForArenaItem.module.css';

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

  const moveEventClickHandler = () => {
    if (action === 'Move' && !hasMoved) {
      dispatch(userMove(item.value));
    } else if (action === 'Punch' && !hasAttacked) {
      dispatch(userPunch(item.value));
    }
  };

  return (
    <UIButton variant={'icon'} onClick={moveEventClickHandler}>
      <img src={item.url} alt={item.value} className={s.arrowImage}/>
    </UIButton>
  );
};
