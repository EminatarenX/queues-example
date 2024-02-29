import express, {Express} from 'express'
import { Server } from 'socket.io'

const app: Express = express()

const port: number = 3002

app.use(express.json())

const server = app.listen(port, () => {
  console.log('api-websocket is running on port 3002')
})

const io: Server = new Server(server)

io.on('connection', socket => {
  console.log('User connected')

  socket.on('payment', payment => {
    console.log('payment success and sended to client')
    socket.emit('payment-processed', payment)
  })

  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
})
