import express from 'express'
import ioClient from 'socket.io-client'
const socket = ioClient('http://localhost:3002')
const app = express()

const port = 3001

app.use(express.json())

app.use('/api/payment', async (req, res) => {
  console.log('Payment received: ', req.body)
  socket.emit('payment', req.body)
  res.send('Payment received')

})
