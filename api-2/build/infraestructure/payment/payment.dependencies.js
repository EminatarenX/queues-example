"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentController = void 0;
const payment_application_1 = require("../../aplication/payment/payment.application");
const payment_controller_1 = require("./controllers/payment.controller");
const payment_repository_1 = require("./payment.repository");
const socket_io_1 = require("../services/socket.io");
const paymentRepository = new payment_repository_1.PaymentRepository();
const socketIO = new socket_io_1.SocketIO();
const paymentUseCase = new payment_application_1.PaymentApplication(paymentRepository, socketIO);
exports.paymentController = new payment_controller_1.PaymentController(paymentUseCase);
//# sourceMappingURL=payment.dependencies.js.map