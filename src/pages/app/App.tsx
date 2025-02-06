import {FC} from 'react';

import warriorImg from '../../assets/images/warrior.svg';
import backgroundStartImg from '../../assets/images/backgroundStart.webp';

import s from './App.module.css';

import {PageWrapper, UIButton, UnitIcon} from '@/components/common';

interface IApp {
    onNavigate: (path: string) => void
}

export const App: FC<IApp> = ({
  onNavigate,
},
) => {

  const navigateButtonClickHandlerPVE = () => {
    onNavigate('/arenaPVE');
  };

  const navigateButtonClickHandlerPVP = () => {
    onNavigate('/arenaPVP');
  };

  return (
    <PageWrapper imgUrl={backgroundStartImg}>
      <UnitIcon imgUrl={warriorImg} alt={'Warrior'}/>
      <div className={s.buttonGoToArenaContainer}>
        <UIButton variant={'arena'} onClick={navigateButtonClickHandlerPVE}>
                go to arena PVE
        </UIButton>
        <UIButton variant={'arena'} onClick={navigateButtonClickHandlerPVP}>
              go to arena PVP
        </UIButton>
      </div>
    </PageWrapper>
  );
};
