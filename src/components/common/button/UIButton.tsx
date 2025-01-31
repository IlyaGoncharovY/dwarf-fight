import { FC, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import s from './UIButton.module.css';

interface UIButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'back' | 'arena' | 'icon';
}

export const UIButton: FC<UIButtonProps> = ({ variant = 'default', className, children, ...props }) => {
  return (
    <button className={clsx(s.button, s[variant], className)} {...props}>
      {children}
    </button>
  );
};
