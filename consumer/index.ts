// consumer-app.js
import { ConsumeMessage, connect }  from "amqplib";
import axios from 'axios';

interface IPayment {
  content: string
}

async function consumeMessages() {
  const connection = await connect('amqps://shyltaqk:2FEEudI0x6H8FLyx9tjDsToruJARCX2F@shrimp.rmq.cloudamqp.com/shyltaqk');
  const channel = await connection.createChannel();
  
  const queue = 'payments';
  await channel.assertQueue(queue, { durable: false });


  channel.consume(queue, async (payment) => {
    const exchangeName = 'payment-exchange';
   
    try {
      if (payment) {
        const paymentContent = payment.content.toString()
        
        await axios.post('http://localhost:3001/api/payment', JSON.parse(paymentContent));
        console.log('Payment processed');
        await channel.publish(exchangeName, 'payment-processed', Buffer.from(payment.content.toString()));
        await channel.ack(payment);
      }
    } catch (error) {
      console.log(error);
    }
  }, { noAck: false });
}

consumeMessages().then(() => console.log('Consumer app started')).catch(error => console.error(error));
