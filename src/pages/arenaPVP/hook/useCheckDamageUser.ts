import {useEffect, useState} from 'react';

interface IUseCheckDamageUser {
    turnCount: number;
    playerIsHit: boolean;
    opponentIsHit: boolean;
}

interface IUseCheckDamageUserReturnsParam  {
    localPlayerHit: boolean;
    localOpponentHit: boolean;
}

/**
 * Хук для отслеживания состония попал ли противник в пользователя или нет.
 * Для состояния isHit в UnitIcon
 * @param {IUseCheckDamageUser} props - параметры для useCheckDamageUser.
 * @param {number} props.turnCount - отслеживания перехода к следующему ходу.
 * @param {boolean} props.playerIsHit - попал ли оппонент по пользователь.
 * @param {boolean} props.opponentIsHit - попал ли пользователь по оппоненту.
 * @return {localPlayerHit}  - попал ли оппонент по пользователь.
 * @return {localOpponentHit} - попал ли пользователь по оппоненту.
 */
export const useCheckDamageUser  = ({
  turnCount,
  playerIsHit,
  opponentIsHit,
}:IUseCheckDamageUser): IUseCheckDamageUserReturnsParam => {

  const [localPlayerHit, setLocalPlayerHit] = useState(false);
  const [localOpponentHit, setLocalOpponentHit] = useState(false);
  const [prevTurn, setPrevTurn] = useState(turnCount);

  useEffect(() => {
    if (turnCount !== prevTurn) {
      if (playerIsHit) {
        setLocalPlayerHit(true);
        setTimeout(() => setLocalPlayerHit(false), 1000);
      }
      if (opponentIsHit) {
        setLocalOpponentHit(true);
        setTimeout(() => setLocalOpponentHit(false), 1000);
      }
      setPrevTurn(turnCount);
    }
  }, [turnCount, prevTurn, playerIsHit, opponentIsHit]);

  return {
    localPlayerHit,
    localOpponentHit,
  };
};
