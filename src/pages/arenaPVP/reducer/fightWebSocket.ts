import {DirectionType, IGameData, Nullable} from '@/common/types';

// const BACK_URL = import.meta.env.VITE_REACT_APP_BACK_URL;

/**
 * Класс для работы с WebSocket-соединением в игре.
 */
export class FightWebSocket {
  /**
   * WebSocket-соединение.
   * @private
   * @type {WebSocket}
   */
  private ws: WebSocket;

  /**
   * Идентификатор игрока.
   * @private
   * @type {string}
   */
  private playerId: string;

  /**
   * Идентификатор игры, получаемый от сервера.
   * @private
   * @type {Nullable<string>}
   */
  private gameId: Nullable<string> = null;

  /**
   * Callback для обработки обновлений игрового состояния.
   * @private
   * @type {(data: IGameData) => void}
   */
  private onUpdate: (data: IGameData) => void;

  /**
   * Создаёт экземпляр FightWebSocket.
   *
   * @param {string} playerId - Идентификатор игрока.
   * @param {(data: IGameData) => void} onUpdate - Функция, вызываемая при получении обновлённого состояния игры.
   */
  constructor(playerId: string, onUpdate: (data: IGameData) => void) {
    this.playerId = playerId;
    this.onUpdate = onUpdate;
    this.ws = new WebSocket('https://jobtracker-l44k.onrender.com');
    // this.ws = new WebSocket('ws://localhost:8000');

    this.ws.onopen = () => {
      // console.log('Подключено к WebSocket');
      this.ws.send(JSON.stringify({ type: 'join', playerId }));
    };

    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.gameId) {
        this.gameId = data.gameId;
      }
      this.onUpdate(data);
    };

    this.ws.onclose = () => {
      // console.log('WebSocket отключен');
    };
  }

  /**
   * Отправляет сообщение о движении игрока.
   *
   * @param {DirectionType} direction - Направление движения.
   */
  sendMove(direction: DirectionType) {
    this.ws.send(JSON.stringify({ type: 'move', playerId: this.playerId, direction, gameId: this.gameId }));
  }

  /**
   * Отправляет сообщение об атаке игрока.
   *
   * @param {DirectionType} attackDirection - Направление атаки.
   */
  sendPunch(attackDirection: DirectionType) {
    this.ws.send(JSON.stringify({ type: 'punch', playerId: this.playerId, attackDirection, gameId: this.gameId }));
  }

  /**
   * Закрывает WebSocket-соединение.
   */
  close() {
    this.ws.close();
  }
}
