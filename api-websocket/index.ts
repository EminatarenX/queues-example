import express, {Express} from 'express'
import { Server } from 'socket.io'
import cors from 'cors'

const app: Express = express()

const port: number = 3002

app.use(express.json())
app.use(cors({
  origin: ['http://34.206.25.41:4000']
}))

const server = app.listen(port, () => {
  console.log('api-websocket is running on port 3002')
})

const io: Server = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: ["http://34.206.25.41:4000"]
  }
})

io.on('connection', socket => {

  socket.on('payment', payment => {
    console.log('payment success and sended to client: ', payment)
    io.emit('payment-processed', payment)
  })

  // Manejo de errores en el cliente
socket.on("connect_error", (error) => {
  console.error("Error de conexión:", error);
});

// Manejo de eventos desconectados
socket.on("disconnect", (reason) => {
  console.error("Desconectado:", reason);
});

})
