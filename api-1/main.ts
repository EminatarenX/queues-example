import { Server } from "./src/infraestructure/server/server";

(async () => {
  const server = new Server()
  server.start()
})()
