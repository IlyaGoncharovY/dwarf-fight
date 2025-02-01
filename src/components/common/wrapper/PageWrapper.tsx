import {FC, ReactNode, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../../store';

import s from './PageWrapper.module.css';
import {AudioManager} from './reducer/audioManager.ts';
import {toggleAudio} from './reducer/audioSlice.ts';

interface IPageWrapper {
    imgUrl: string;
    children: ReactNode;
}

/**
 * PageWrapper - Обёртка для страниц, добавляющая фон с изображением.
 * Используется для стилизованного отображения страниц с фиксированным задним фоном.
 *
 * @param {IPageWrapper} props - Свойства компонента.
 * @param {string} props.imgUrl - URL изображения, которое будет использовано в качестве фона.
 * @param {ReactNode} props.children - Дочерние элементы, которые будут отрисованы внутри контейнера.
 *
 * @returns {JSX.Element} Контейнер с заданным фоном и переданными дочерними элементами.
 *
 * @example
 * <PageWrapper imgUrl="/path/to/background.jpg">
 *   <h1>Welcome to the Arena</h1>
 *   <button>Start Game</button>
 * </PageWrapper>
 */
export const PageWrapper: FC<IPageWrapper> = ({
  imgUrl,
  children,
}: IPageWrapper): JSX.Element => {

  const isPlaying = useAppSelector((state) => state.wrapperReducer.isPlaying);

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
    <div
      className={s.pageWrapperContainer}
      style={{backgroundImage: `url(${imgUrl})`}}
    >
      <span className={s.audioButton} onClick={toggleMusicHandler}>
        {isPlaying ? '🔇 off' : '🔊 on'}
      </span>
      {children}
    </div>
  );
};
