import { connect } from "amqplib";
import axios from 'axios'

const connection = await connect('amqps://shyltaqk:2FEEudI0x6H8FLyx9tjDsToruJARCX2F@shrimp.rmq.cloudamqp.com/shyltaqk')
const channel = await connection.createChannel()
const queue = 'payments'
await channel.assertQueue(queue, { durable: false })

channel.consume(queue, async (payment) => {
  console.log('Payment received: ', payment.content.toString())
  try {
    const pay = payment.content.toString()
    console.log(JSON.parse(pay))
     await axios.post('http://localhost:3001/api/payment', JSON.parse(pay))
  
    console.log('Payment processed')
  } catch (error) {
    console.log(error)
  }
})
