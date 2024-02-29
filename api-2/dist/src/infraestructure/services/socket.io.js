"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketIO = void 0;
const socket_io_client_1 = __importDefault(require("socket.io-client"));
class SocketIO {
    constructor() {
        this.socket = (0, socket_io_client_1.default)('http://34.206.25.41:3002');
    }
    emit(event, data) {
        this.socket.emit(event, data);
    }
}
exports.SocketIO = SocketIO;
