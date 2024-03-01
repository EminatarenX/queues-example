"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./infraestructure/server/server");
(async () => {
    const server = new server_1.Server();
    server.start();
})();
//# sourceMappingURL=main.js.map