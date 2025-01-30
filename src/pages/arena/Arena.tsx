import {FC} from 'react';

import warriorImage from '../../assets/images/warrior.svg';
import goblinImage from '../../assets/images/goblinFat.svg';

import s from './Arena.module.css';

interface IArena {
    onNavigate: (path: string) => void
}

export const Arena:FC<IArena> = ({
  onNavigate,
}) => {

  const navigateButtonClickHandler = () => {
    onNavigate('/');
  };

  return (
    <div className={s.arenaContainer}>
      <h1>Arena</h1>
      <div>
        <p>move</p>
        <button>left</button>
        <button>center</button>
        <button>right</button>
      </div>
      <div className={s.imgContainer}>
        <div className={s.unitContainer}>
          <img src={goblinImage} alt={'goblin'}/>
          <p>hp: 5</p>
        </div>
        <div className={s.unitContainer}>
          <img src={warriorImage} alt={'warrior'}/>
          <p>hp: 5</p>
        </div>
      </div>
      <div>
        <p>punch</p>
        <button>left</button>
        <button>center</button>
        <button>right</button>
      </div>
      <button onClick={navigateButtonClickHandler}>
              back
      </button>
    </div>
  );
};
