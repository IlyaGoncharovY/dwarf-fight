import {DirectionType, Nullable} from '@/common/types';

export class FightWebSocket {
  private ws: WebSocket;
  private playerId: string;
  private gameId: Nullable<string> = null;
  private onUpdate: (data: any) => void;

  constructor(playerId: string, onUpdate: (data: any) => void) {
    this.playerId = playerId;
    this.onUpdate = onUpdate;
    this.ws = new WebSocket('ws://localhost:8080');

    this.ws.onopen = () => {
      console.log('Подключено к WebSocket');
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
      console.log('WebSocket отключен');
    };
  }

  sendMove(direction: DirectionType) {
    this.ws.send(JSON.stringify({ type: 'move', playerId: this.playerId, direction, gameId: this.gameId }));
  }

  sendPunch(attackDirection: DirectionType) {
    this.ws.send(JSON.stringify({ type: 'punch', playerId: this.playerId, attackDirection, gameId: this.gameId }));
  }

  close() {
    this.ws.close();
  }
}
