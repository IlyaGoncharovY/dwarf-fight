/**
 * Направление экшона для игрока в игре
 */
export type DirectionType = 'left' | 'right' | 'center';

/**
 * Типизация одного игрока
 */
export interface FighterState {
    id: string;
    hp: number;
    damage: number;
    move: DirectionType;
    setDamage: DirectionType;
}
