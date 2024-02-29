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
exports.PaymentApplication = void 0;
class PaymentApplication {
    constructor(payment, socket) {
        this.payment = payment;
        this.socket = socket;
    }
    run(id, status, amount, userId, createdAt) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id, status, amount, userId, createdAt);
            const payment = yield this.payment.payment(id, status, amount, userId, createdAt);
            this.socket.emit("payment", payment);
            console.log('payment-saved');
            return true;
        });
    }
}
exports.PaymentApplication = PaymentApplication;
