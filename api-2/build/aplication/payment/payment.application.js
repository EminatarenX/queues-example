"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentApplication = void 0;
class PaymentApplication {
    constructor(payment, socket) {
        this.payment = payment;
        this.socket = socket;
    }
    async run(id, status, amount, userId, createdAt) {
        console.log(id, status, amount, userId, createdAt);
        const payment = await this.payment.payment(id, status, amount, userId, createdAt);
        this.socket.emit("payment", payment);
        console.log('payment-saved');
        return true;
    }
}
exports.PaymentApplication = PaymentApplication;
//# sourceMappingURL=payment.application.js.map