import {useEffect, useState} from 'react';

/**
 * useUnitDamage - Кастомный хук для отображения анимации урона.
 * Показывает эффект урона (`showDamageEffect`) на 500ms при попадании.
 *
 * @param {boolean} [isHit] - Флаг, указывающий, получил ли юнит урон. Если `true`, активирует эффект урона.
 * @returns {{ showDamageEffect: boolean }} Объект с флагом `showDamageEffect`,
 * который указывает, нужно ли отображать эффект.
 *
 * @example
 * const { showDamageEffect } = useUnitDamage(userHitGoblin);
 *
 * return (
 *   <div className="unit">
 *     <img src="/warrior.png" alt="Warrior" />
 *     {showDamageEffect && <div className="damageEffect" />}
 *   </div>
 * );
 */
export const useUnitDamage = (isHit?: boolean): { showDamageEffect: boolean } => {

  const [showDamageEffect, setShowDamageEffect] = useState(false);

  useEffect(() => {
    if (isHit) {
      setShowDamageEffect(true);
      const timer = setTimeout(() => setShowDamageEffect(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isHit]);

  return {
    showDamageEffect,
  };
};
