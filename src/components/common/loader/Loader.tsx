import {FC} from 'react';

import s from './Loader.module.css';

interface ILoader {
    text?: string
    colorText?: string
}

export const Loader: FC<ILoader> = ({text = '...', colorText = 'var(--primary-color)'}) => {
  return (
    <div className={s.loaderContainer}>
      <div className={s.loader} />
      <p style={{color: colorText}}>{text}</p>
    </div>
  );
};
