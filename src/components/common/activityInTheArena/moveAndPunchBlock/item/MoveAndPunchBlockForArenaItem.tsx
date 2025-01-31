import {FC} from 'react';

import {useAppDispatch} from '../../../../../store';
import {buttonsForActivityInArenaType} from '../../../../../common/dataSet';
import {userMove, userPunch} from '../../../../../pages/arena/reducer/fightSlice.ts';

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

  const moveEventClickHandler = () => {
    if (action === 'Move') {
      dispatch(userMove(item.value));
    } else {
      dispatch(userPunch(item.value));
    }
  };

  return (
    <button className={s.arrowButton} onClick={moveEventClickHandler}>
      <img src={item.url} alt={item.value} className={s.arrowImage}/>
    </button>
  );
};
