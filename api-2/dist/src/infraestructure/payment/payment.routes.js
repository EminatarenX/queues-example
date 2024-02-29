"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_dependencies_1 = require("./payment.dependencies");
const router = (0, express_1.Router)();
router.post("/", payment_dependencies_1.paymentController.run.bind(payment_dependencies_1.paymentController));
exports.default = router;
