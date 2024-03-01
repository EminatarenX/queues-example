"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePayment = void 0;
class CreatePayment {
    constructor(paymentRepository, amqpService) {
        this.paymentRepository = paymentRepository;
        this.amqpService = amqpService;
    }
    async run(amount, userId) {
        const payment = await this.paymentRepository.create(amount, userId);
        this.amqpService.publishInQueue('payments', JSON.stringify(payment));
        console.log('payment-sended');
        return true;
    }
}
exports.CreatePayment = CreatePayment;
//# sourceMappingURL=create.application.js.map