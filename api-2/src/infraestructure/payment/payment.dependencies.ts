import { PaymentApplication } from "../../aplication/payment/payment.application";
import { PaymentController } from "./controllers/payment.controller";
import { PaymentRepository } from "./payment.repository";
import { SocketIO } from "../services/socket.io";

const paymentRepository = new PaymentRepository();
const socketIO = new SocketIO();

const paymentUseCase = new PaymentApplication(paymentRepository, socketIO);
export const paymentController = new PaymentController(paymentUseCase);
