"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
class PaymentController {
    constructor(paymentApplication) {
        this.paymentApplication = paymentApplication;
    }
    async run(req, res) {
        const { id, status, amount, userId, createdAt } = req.body;
        const payment = await this.paymentApplication.run(id, status, amount, userId, createdAt);
        res.json({
            code: 200,
            status: payment,
            message: "Payment success"
        });
    }
}
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment.controller.js.map