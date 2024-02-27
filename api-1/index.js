import express from 'express'
import { connect } from 'amqplib'

const app = express()

app.use(express.json())

app.post('/api/payment', async (req, res) => {
  const payment = JSON.stringify(req.body)

  const connection = await connect('amqps://shyltaqk:2FEEudI0x6H8FLyx9tjDsToruJARCX2F@shrimp.rmq.cloudamqp.com/shyltaqk')
  const channel = await connection.createChannel()
  const queue = 'payments'
  await channel.assertQueue(queue, { durable: false })

  channel.sendToQueue(queue, Buffer.from(payment))
  console.log('Payment sent to queue: ', payment)

  res.send('Payment received')
})


app.listen(3000, () => {
  console.log('Server-1 is running on port 3000')
})
