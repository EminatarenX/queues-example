"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// consumer-app.js
const amqplib_1 = require("amqplib");
const axios_1 = __importDefault(require("axios"));
async function consumeMessages() {
    const connection = await (0, amqplib_1.connect)('amqps://shyltaqk:2FEEudI0x6H8FLyx9tjDsToruJARCX2F@shrimp.rmq.cloudamqp.com/shyltaqk');
    const channel = await connection.createChannel();
    const queue = 'payments';
    await channel.assertQueue(queue, { durable: false });
    channel.consume(queue, async (payment) => {
        const exchangeName = 'payment-exchange';
        try {
            if (payment) {
                const paymentContent = payment.content.toString();
                await axios_1.default.post('http://34.206.25.41:3001/api/payment', JSON.parse(paymentContent));
                console.log('Payment processed');
                await channel.publish(exchangeName, 'payment-processed', Buffer.from(payment.content.toString()));
                await channel.ack(payment);
            }
        }
        catch (error) {
            console.log(error);
        }
    }, { noAck: false });
}
consumeMessages().then(() => console.log('Consumer app started')).catch(error => console.error(error));
//# sourceMappingURL=index.js.map