import {FC, ReactNode} from 'react';

import s from './PageWrapper.module.css';

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
  return (
    <div
      className={s.pageWrapperContainer}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      {children}
    </div>
  );
};
