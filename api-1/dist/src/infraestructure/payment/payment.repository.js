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
exports.PaymentRepository = void 0;
const client_1 = require("@prisma/client");
const Payment_1 = require("../../domain/payment/Payment");
class PaymentRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    create(amount, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const payment = yield this.prisma.payment.create({
                data: {
                    amount,
                    status: 'PENDING',
                    userId,
                }
            });
            return new Payment_1.Payment(payment.id, payment.amount, payment.status, payment.userId, payment.createdAt);
        });
    }
}
exports.PaymentRepository = PaymentRepository;
