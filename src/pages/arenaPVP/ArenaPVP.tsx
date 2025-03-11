import {FC} from 'react';

import arenaPVPBGImage from '../../assets/images/PVP_BG.png';

import {Loader, PageWrapper, UIButton} from '@/components/common';
import {GameOverScreen} from '@/pages/arenaPVP/components/gameOver/GameOverScreen.tsx';
import {ActiveGameScreen} from '@/pages/arenaPVP/components/activeGameScreen/ActiveGameScreen.tsx';
import {useArenaPVP} from '@/pages/arenaPVP/hook';

interface IArenaPVP {
  onNavigate: (path: string) => void;
}

export const ArenaPVP: FC<IArenaPVP> = ({ onNavigate }) => {

  const {gameData, wsClient} = useArenaPVP();

  const navigateButtonClickHandler = () => onNavigate('/');

  let content;
  if (!gameData) {
    content = <Loader text={'...connect'}/>;
  } else if (gameData.gameOver) {
    content = <GameOverScreen turnCount={gameData.turnCount} result={gameData.result} />;
  } else if (gameData.player && gameData.opponent && wsClient) {
    content = (
      <ActiveGameScreen
        turnCount={gameData.turnCount}
        player={gameData.player}
        opponent={gameData.opponent}
        logMessages={gameData.log}
        wsClient={wsClient}
      />
    );
  } else {
    content = <Loader text={'...connect'}/>;
  }

  return (
    <PageWrapper imgUrl={arenaPVPBGImage}>
      {content}
      <UIButton variant={'back'} onClick={navigateButtonClickHandler}>Back</UIButton>
    </PageWrapper>
  );
};
