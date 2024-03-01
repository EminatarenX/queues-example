"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmqpService = void 0;
const amqplib_1 = require("amqplib");
class AmqpService {
    constructor() {
        this.initializeRabbitMQ();
    }
    async initializeRabbitMQ() {
        this.connection = await (0, amqplib_1.connect)('amqps://shyltaqk:2FEEudI0x6H8FLyx9tjDsToruJARCX2F@shrimp.rmq.cloudamqp.com/shyltaqk');
        this.channel = await this.connection.createChannel();
        const exchangeName = 'payment-exchange';
        const queue = 'payments';
        const routing_key = 'payment-routing-key';
        // Declarar exchange y cola
        // await this.channel.assertExchange(exchangeName, 'direct', { durable: false });
        // await this.channel.assertQueue(queue, { durable: false });
        await this.channel.bindQueue(queue, exchangeName, routing_key);
    }
    async publishInQueue(queue, payment) {
        const routing_key = 'payment-routing-key';
        const exchangeName = 'payment-exchange';
        this.channel.publish(exchangeName, routing_key, Buffer.from(payment));
    }
    async consume(queue) {
        this.channel.assertQueue(queue, { durable: false });
        this.channel.consume(queue, (payment) => {
            if (payment) {
                this.publishInQueue('payment-processed', payment.content.toString());
                this.channel.ack(payment);
            }
        }, { noAck: false });
    }
}
exports.AmqpService = AmqpService;
//# sourceMappingURL=amqp.service.js.map