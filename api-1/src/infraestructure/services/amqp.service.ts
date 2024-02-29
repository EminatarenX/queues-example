import amqplib, { connect } from 'amqplib';
import { IAmqpService } from '../../domain/amqp/IAmqp.interface';

export class AmqpService implements IAmqpService {

  private connection!: amqplib.Connection
  private channel!: amqplib.Channel

  constructor() {
    this.initializeRabbitMQ()
  }

  private async initializeRabbitMQ() {
    this.connection = await connect('amqps://shyltaqk:2FEEudI0x6H8FLyx9tjDsToruJARCX2F@shrimp.rmq.cloudamqp.com/shyltaqk');
    this.channel = await this.connection.createChannel();

    const exchangeName = 'payment-exchange';
    const queue = 'payments';
    const routing_key = 'payment-routing-key';

    // Declarar exchange y cola
    // await this.channel.assertExchange(exchangeName, 'direct', { durable: false });
    // await this.channel.assertQueue(queue, { durable: false });
    await this.channel.bindQueue(queue, exchangeName, routing_key);
  }

  async publishInQueue(queue: string, payment: string) {
    const routing_key = 'payment-routing-key';
    const exchangeName = 'payment-exchange';
    this.channel.publish(exchangeName, routing_key, Buffer.from(payment));
  }

  async consume(queue: string) {
    this.channel.assertQueue(queue, { durable: false });
    this.channel.consume(queue, (payment) => {
      if (payment) {
        this.publishInQueue('payment-processed', payment.content.toString())
        this.channel.ack(payment)
      }
    }, { noAck: false });
  }

}
