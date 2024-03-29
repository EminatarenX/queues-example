"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaymentController = void 0;
const payment_repository_1 = require("./payment.repository");
const create_application_1 = require("../../application/payment/create.application");
const create_controller_1 = require("./controllers/create.controller");
const amqp_service_1 = require("../services/amqp.service");
const paymentRepository = new payment_repository_1.PaymentRepository();
const amqpservice = new amqp_service_1.AmqpService();
const createUseCase = new create_application_1.CreatePayment(paymentRepository, amqpservice);
exports.createPaymentController = new create_controller_1.CreatePaymentController(createUseCase);
//# sourceMappingURL=payment.dependencies.js.map