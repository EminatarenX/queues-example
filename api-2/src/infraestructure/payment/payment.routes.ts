import { Router } from "express";
import { paymentController } from "./payment.dependencies";

const router = Router();
router.post("/", paymentController.run.bind(paymentController));
export default router;

