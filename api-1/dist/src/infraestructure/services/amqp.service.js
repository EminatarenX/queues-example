"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmqpService = void 0;
const amqplib_1 = require("amqplib");
class AmqpService {
    constructor() {
        this.initializeRabbitMQ();
    }
    initializeRabbitMQ() {
        return __awaiter(this, void 0, void 0, function* () {
            this.connection = yield (0, amqplib_1.connect)('amqps://shyltaqk:2FEEudI0x6H8FLyx9tjDsToruJARCX2F@shrimp.rmq.cloudamqp.com/shyltaqk');
            this.channel = yield this.connection.createChannel();
            const exchangeName = 'payment-exchange';
            const queue = 'payments';
            const routing_key = 'payment-routing-key';
            // Declarar exchange y cola
            // await this.channel.assertExchange(exchangeName, 'direct', { durable: false });
            // await this.channel.assertQueue(queue, { durable: false });
            yield this.channel.bindQueue(queue, exchangeName, routing_key);
        });
    }
    publishInQueue(queue, payment) {
        return __awaiter(this, void 0, void 0, function* () {
            const routing_key = 'payment-routing-key';
            const exchangeName = 'payment-exchange';
            this.channel.publish(exchangeName, routing_key, Buffer.from(payment));
        });
    }
    consume(queue) {
        return __awaiter(this, void 0, void 0, function* () {
            this.channel.assertQueue(queue, { durable: false });
            this.channel.consume(queue, (payment) => {
                if (payment) {
                    this.publishInQueue('payment-processed', payment.content.toString());
                    this.channel.ack(payment);
                }
            }, { noAck: false });
        });
    }
}
exports.AmqpService = AmqpService;
