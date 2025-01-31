import {FC, useEffect} from 'react';

import warriorImg from '../../assets/images/warrior.svg';
import backgroundStartImg from '../../assets/images/backgroundStart.webp';

import {useTelegram} from '../../common/hooks';
import {PageWrapper, UnitIcon} from '../../components/common';

import s from './App.module.css';

interface IApp {
    onNavigate: (path: string) => void
}

export const App: FC<IApp> = ({
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
    <PageWrapper imgUrl={backgroundStartImg}>
      <UnitIcon imgUrl={warriorImg} alt={'Warrior'}/>
      <button onClick={navigateButtonClickHandler} className={s.buttonGoToArena}>
                go to arena
      </button>
    </PageWrapper>
  );
};
