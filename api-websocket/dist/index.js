"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const port = 3002;
app.use(express_1.default.json());
const server = app.listen(port, () => {
    console.log('api-websocket is running on port 3002');
});
const io = new socket_io_1.Server(server);
io.on('connection', socket => {
    console.log('User connected');
    socket.on('payment', payment => {
        console.log('payment success and sended to client');
        socket.emit('payment-processed', payment);
    });
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
