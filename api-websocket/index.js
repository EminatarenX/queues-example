import express from 'express'
import { Server } from 'socket.io'

const app = express()

const port = 3002

app.use(express.json())

const server = app.listen(port, () => {
  console.log('api-websocket is running on port 3002')
})

const io = new Server(server)

io.on('connection', socket => {
  console.log('User connected')

  socket.on('payment', payment => {
    console.log('Payment received: ', payment)
    socket.emit('payment-user', payment)
  })

  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
})
