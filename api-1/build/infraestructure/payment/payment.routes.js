"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_dependencies_1 = require("./payment.dependencies");
const paymentRouter = (0, express_1.Router)();
paymentRouter.post('/', payment_dependencies_1.createPaymentController.run.bind(payment_dependencies_1.createPaymentController));
exports.default = paymentRouter;
//# sourceMappingURL=payment.routes.js.map