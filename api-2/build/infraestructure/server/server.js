"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const payment_routes_1 = __importDefault(require("../payment/payment.routes"));
class Server {
    constructor() {
        this.port = 3001;
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use('/api/payment', payment_routes_1.default);
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map