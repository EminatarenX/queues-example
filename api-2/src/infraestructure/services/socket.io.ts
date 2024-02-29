import socketClient from 'socket.io-client'
import { ISocketIOInterface } from '../../domain/services/Isocket.io'

export class SocketIO implements ISocketIOInterface {
  private socket: any

  constructor() {
    this.socket = socketClient('http://localhost:3002')
  }

  emit(event: string, data: any) {
    this.socket.emit(event, data)
  }
}
