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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// consumer-app.js
const amqplib_1 = require("amqplib");
const axios_1 = __importDefault(require("axios"));
function consumeMessages() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield (0, amqplib_1.connect)('amqps://shyltaqk:2FEEudI0x6H8FLyx9tjDsToruJARCX2F@shrimp.rmq.cloudamqp.com/shyltaqk');
        const channel = yield connection.createChannel();
        const queue = 'payments';
        yield channel.assertQueue(queue, { durable: false });
        channel.consume(queue, (payment) => __awaiter(this, void 0, void 0, function* () {
            const exchangeName = 'payment-exchange';
            try {
                if (payment) {
                    const paymentContent = payment.content.toString();
                    yield axios_1.default.post('http://localhost:3001/api/payment', JSON.parse(paymentContent));
                    console.log('Payment processed');
                    yield channel.publish(exchangeName, 'payment-processed', Buffer.from(payment.content.toString()));
                    yield channel.ack(payment);
                }
            }
            catch (error) {
                console.log(error);
            }
        }), { noAck: false });
    });
}
consumeMessages().then(() => console.log('Consumer app started')).catch(error => console.error(error));
