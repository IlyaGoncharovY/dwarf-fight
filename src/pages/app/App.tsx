import {FC, useEffect} from 'react';

import warriorImg from '../../assets/images/warrior.svg';

import {useTelegram} from '../../common/hooks';

import s from './App.module.css';

interface IApp {
    onNavigate: (path: string) => void
}

export const App:FC<IApp> = ({
  onNavigate,
},
) => {

  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  const navigateButtonClickHandler = () => {
    onNavigate('/arena');
  };

  return (
    <div className={s.appContainer}>
      <img src={warriorImg} alt="Warrior" className={s.warrior}/>
      <button onClick={navigateButtonClickHandler}>
          go to arena
      </button>
    </div>
  );
};
