import { FC, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import s from './UIButton.module.css';

interface UIButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Вариант кнопки, определяющий её стили.
     * @default "default"
     */
    variant?: 'default' | 'back' | 'arena' | 'icon';
}

/**
 * Универсальная кнопка для всего проекта.
 * Поддерживает стилизацию через `variant` и все стандартные атрибуты `<button>`.
 *
 * @component
 * @example
 * // Обычная кнопка
 * <UIButton onClick={() => console.log('Clicked!')}>Click me</UIButton>
 *
 * @example
 * // Кнопка "Назад" (вариант 'back')
 * <UIButton variant="back" onClick={() => console.log('Go Back')}>Назад</UIButton>
 *
 * @example
 * // Кнопка для перехода в арену
 * <UIButton variant="arena" onClick={() => console.log('Go to Arena')}>Go to Arena</UIButton>
 *
 * @example
 * // Кнопка-иконка с изображением
 * <UIButton variant="icon">
 *   <img src="/path-to-icon.svg" alt="Icon" />
 * </UIButton>
 *
 * @param {UIButtonProps} props - Свойства кнопки
 * @returns {JSX.Element} Компонент кнопки
 */
export const UIButton: FC<UIButtonProps> = ({
  variant = 'default',
  className,
  children,
  ...props
}: UIButtonProps): JSX.Element => {
  return (
    <button className={clsx(s.button, s[variant], className)} {...props}>
      {children}
    </button>
  );
};
