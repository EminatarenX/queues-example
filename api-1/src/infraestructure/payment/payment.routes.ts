import { Router } from "express";
import { createPaymentController } from "./payment.dependencies";


const paymentRouter = Router()

paymentRouter.post('/', createPaymentController.run.bind(createPaymentController))

export default paymentRouter
