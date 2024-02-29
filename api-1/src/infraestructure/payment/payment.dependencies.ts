import { PaymentRepository } from "./payment.repository";
import { CreatePayment } from "../../application/payment/create.application";
import { CreatePaymentController } from "./controllers/create.controller";
import { AmqpService } from "../services/amqp.service";

const paymentRepository = new PaymentRepository()
const amqpservice = new AmqpService()
const createUseCase = new CreatePayment(paymentRepository, amqpservice)
export const createPaymentController = new CreatePaymentController(createUseCase)
