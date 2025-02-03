import leftArrow from '../../../assets/images/left.svg';
import centerArrow from '../../../assets/images/center.svg';
import rightArrow from '../../../assets/images/right.svg';

import {DirectionType} from '@/pages/arena/reducer/fightSlice.ts';

export type buttonsForActivityInArenaType = {
  id: number
  value: DirectionType
  url: string
}

export const buttonsForActivityInArena: buttonsForActivityInArenaType[] = [
  {
    id: 1,
    value: 'left',
    url: leftArrow,
  },
  {
    id: 2,
    value: 'center',
    url: centerArrow,
  },
  {
    id: 3,
    value: 'right',
    url: rightArrow,
  },
];
