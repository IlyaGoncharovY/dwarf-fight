import {FC} from 'react';

import {useUnitDamage} from './hook/useUnitDamage.ts';

import s from './UnitIcon.module.css';

interface IUnitIcon {
    imgUrl: string
    alt: string
    hp?: number
    isHit?: boolean
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
}: IUnitIcon): JSX.Element => {

  const {showDamageEffect} = useUnitDamage(isHit);

  return (
    <div className={s.unitContainer}>
      <img src={imgUrl} alt={alt} />
      {hp && <p>HP: {hp}</p>}
      {showDamageEffect && <div className={s.damageEffect} />}
    </div>
  );
};
