"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3002;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ['http://34.206.25.41:4000']
}));
const server = app.listen(port, () => {
    console.log('api-websocket is running on port 3002');
});
const io = new socket_io_1.Server(server, {
    pingTimeout: 60000,
    cors: {
        origin: ["http://34.206.25.41:4000"]
    }
});
io.on('connection', socket => {
    socket.on('payment', payment => {
        console.log('payment success and sended to client: ', payment);
        io.emit('payment-processed', payment);
    });
    // Manejo de errores en el cliente
    socket.on("connect_error", (error) => {
        console.error("Error de conexión:", error);
    });
    // Manejo de eventos desconectados
    socket.on("disconnect", (reason) => {
        console.error("Desconectado:", reason);
    });
});
//# sourceMappingURL=index.js.map