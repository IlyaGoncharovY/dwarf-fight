import {FC} from 'react';

import {useUnitDamage} from './hook/useUnitDamage.ts';

import s from './UnitIcon.module.css';

import {Loader} from '@/components/common';

interface IUnitIcon {
    imgUrl: string
    alt: string
    hp?: number
    isHit?: boolean
    userName?: string
}

/**
 * UnitIcon - Анимированная картинка юнита с отображением здоровья (HP).
 * Используется для визуального представления персонажей в игре.
 *
 * @param {IUnitIcon} props - Свойства компонента.
 * @param {string} props.imgUrl - URL изображения юнита.
 * @param {string} props.alt - Альтернативный текст для изображения (используется для SEO и доступности).
 * @param {number} [props.hp] - Количество здоровья (HP) юнита. Если не передано, не отображается.
 * @param {boolean} [props.isHit] - Флаг, сигнализирующий о попадании (отображает анимацию урона).
 * @param {string} [props.userName] - Имя пользователя.
 *
 * @returns {JSX.Element} Контейнер с изображением юнита и (опционально) индикатором HP.
 *
 * @example
 * <UnitIcon imgUrl="/images/warrior.png" alt="Warrior" hp={10} />
 *
 * <UnitIcon imgUrl="/images/goblin.png" alt="Goblin" />
 */
export const UnitIcon:FC<IUnitIcon> = ({
  imgUrl,
  alt,
  hp,
  isHit,
  userName,
}: IUnitIcon): JSX.Element => {

  const {showDamageEffect} = useUnitDamage(isHit);

  if (userName === 'waiting') {
    return <Loader text={'...Waiting for the opponent'}/>;
  }

  return (
    <div className={s.unitContainer}>
      {userName && <p className={s.nameUserContainer}>Name: {userName}</p>}
      <img src={imgUrl} alt={alt} />
      {hp && <p>HP: {hp}</p>}
      {showDamageEffect && <div className={s.damageEffect} />}
    </div>
  );
};
