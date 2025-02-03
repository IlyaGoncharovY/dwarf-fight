import {useEffect} from 'react';

import {toggleAudio} from '../../reducer/audioSlice.ts';

import s from './HeaderWrapper.module.css';

import {AudioManager} from '@/components/common/wrapper/reducer/audioManager.ts';
import {useAppDispatch, useAppSelector} from '@/store';

import {UIButton} from '@/components/common';

import {useTelegram} from '@/common/hooks';

export const HeaderWrapper = () => {

  const isPlaying = useAppSelector((state) => state.wrapperReducer.isPlaying);

  const {onCloseTMA} = useTelegram();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isPlaying) {
      AudioManager.play();
    } else {
      AudioManager.pause();
    }
  }, [isPlaying]);

  const toggleMusicHandler = () => {
    dispatch(toggleAudio());
  };

  return (
    <div className={s.headerWrapperContainer}>
      <UIButton
        variant={'header'}
        className={s.closeAppButton}
        onClick={onCloseTMA}
      >
        close app
      </UIButton>
      <UIButton
        variant={'header'}
        className={s.audioButton}
        onClick={toggleMusicHandler}>
        {isPlaying ? '🔇 off' : '🔊 on'}
      </UIButton>
    </div>
  );
};
