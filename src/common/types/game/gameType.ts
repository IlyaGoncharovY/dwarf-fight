import {Nullable} from '@/common/types';

/**
 * Направление экшона для игрока в игре (манёвр/удар).
 * @example {'left' | 'right' | 'center'}
 * export type DirectionType = "left" | "right" | "center"
 */
export type DirectionType = 'left' | 'right' | 'center';

/**
 * Типизация одного игрока.
 * @param {FighterState} props - props для типизации одного игрока.
 * @param {string} props.id - Идентификатор игрока.
 * @param {number} props.hp - Здоровье игрока.
 * @param {number} props.damage - Урон, который может нанести игрок.
 * @param {Nullable<DirectionType>} props.move - Направление движения игрока.
 * @param {Nullable<DirectionType>} props.setDamage - Направление атаки игрока.
 * @param {boolean} props.isHit - попал ли противник или нет.
 */
export interface FighterState {
    id: string;
    hp: number;
    damage: number;
    move: Nullable<DirectionType>;
    setDamage: Nullable<DirectionType>;
    isHit: boolean;
}

/**
 * Типизация игрового процесса для WS
 * @param {IGameData} props - props для типизации игрового процесса для WS.
 * @param {string} props.gameId - Идентификатор игры.
 * @param {boolean} props.gameOver - Флаг, указывающий, завершена ли игра.
 * @param {FighterState} props.opponent - Состояние противника.
 * @param {FighterState} props.player - Состояние игрока.
 * @param {string} props.result - Итоговый результат игры.
 * @param {number} props.turnCount - Текущий номер хода.
 */
export interface IGameData {
    gameId: string;
    gameOver: boolean;
    opponent: FighterState;
    player: FighterState;
    result: string;
    turnCount: number;
}
