import {FC} from 'react';

import warriorImage from '../../assets/images/warrior.svg';
import goblinImage from '../../assets/images/goblinFat.svg';
import arenaBGImage from '../../assets/images/arena.webp';

import {useAppDispatch, useAppSelector} from '../../store';

import {MoveAndPunchBlockForArena, PageWrapper, UnitIcon} from '../../components/common';

import {BattleLog, GameOverBlock} from './comonents';
import {restartGame} from './reducer/fightSlice.ts';

import s from './Arena.module.css';
import {useLogMessages} from './hook/useLogMessages.ts';

interface IArena {
    onNavigate: (path: string) => void
}

export const Arena: FC<IArena> = ({
  onNavigate,
}) => {

  const {
    userState,
    goblinState,
    turnCount,
    maxTurns,
    gameOver,
  } = useAppSelector(state => state.arenaReducer);

  const {logMessages, setLogMessages} = useLogMessages();

  const dispatch = useAppDispatch();

  const restartButtonHandler = () => {
    dispatch(restartGame());
    setLogMessages([]);
  };

  const navigateButtonClickHandler = () => {
    onNavigate('/');
  };

  return (
    <PageWrapper imgUrl={arenaBGImage}>
      <p>Turn: {turnCount}/{maxTurns}</p>
      <BattleLog logMessages={logMessages}/>
      <div className={s.arenaContentFightContainer}>
        {gameOver ? (
          <GameOverBlock
            userStateHP={userState.hp}
            goblinStateHP={goblinState.hp}
            restartButtonHandler={restartButtonHandler}
          />
        ) : (
          <>
            <div className={s.imgContainer}>
              <UnitIcon imgUrl={goblinImage} alt={'goblin'} hp={goblinState.hp}/>
              <UnitIcon imgUrl={warriorImage} alt={'warrior'} hp={userState.hp}/>
            </div>
            <MoveAndPunchBlockForArena title={'Move'} action={'Move'}/>
            <MoveAndPunchBlockForArena title={'Punch'} action={'Punch'}/>
          </>
        )}
        <button onClick={navigateButtonClickHandler} className={s.buttonBack}>Back</button>
      </div>
    </PageWrapper>
  );
};
