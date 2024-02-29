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
const payment_1 = require("../../domain/payment/payment");
const client_1 = require("@prisma/client");
class PaymentRepository {
    constructor() {
        this.db = new client_1.PrismaClient();
    }
    payment(id, status, amount, userId, createdAt) {
        return __awaiter(this, void 0, void 0, function* () {
            const payment = yield this.db.payment.update({
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
        });
    }
}
exports.PaymentRepository = PaymentRepository;
