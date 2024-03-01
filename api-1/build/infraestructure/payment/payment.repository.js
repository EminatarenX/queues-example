"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRepository = void 0;
const client_1 = require("@prisma/client");
const Payment_1 = require("../../domain/payment/Payment");
class PaymentRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async create(amount, userId) {
        const payment = await this.prisma.payment.create({
            data: {
                amount,
                status: 'PENDING',
                userId,
            }
        });
        return new Payment_1.Payment(payment.id, payment.amount, payment.status, payment.userId, payment.createdAt);
    }
}
exports.PaymentRepository = PaymentRepository;
//# sourceMappingURL=payment.repository.js.map