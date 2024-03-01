"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRepository = void 0;
const payment_1 = require("../../domain/payment/payment");
const client_1 = require("@prisma/client");
class PaymentRepository {
    constructor() {
        this.db = new client_1.PrismaClient();
    }
    async payment(id, status, amount, userId, createdAt) {
        const payment = await this.db.payment.update({
            data: {
                status: "success"
            },
            where: {
                id
            }
        });
        // const payment = {
        //   id,
        //   status,
        //   amount,
        //   userId,
        //   createdAt
        // }
        return new payment_1.Payment(payment.id, payment.amount, "success", payment.userId, payment.createdAt);
    }
}
exports.PaymentRepository = PaymentRepository;
//# sourceMappingURL=payment.repository.js.map