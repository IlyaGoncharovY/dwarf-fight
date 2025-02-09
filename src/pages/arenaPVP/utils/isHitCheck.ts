import {DirectionType} from '@/common/types';

/**
 * Проверяет, равны ли два направления, если оба заданы.
 *
 * @param {DirectionType | null} move - Направление движения.
 * @param {DirectionType | null} damage - Направление атаки.
 * @returns {boolean} Истина, если оба значения заданы и равны, иначе ложь.
 */
export const isHitCheck = (
  move: DirectionType | null,
  damage: DirectionType | null,
): boolean => {
  return move !== null && damage !== null && move === damage;
};
