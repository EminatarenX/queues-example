import { PaymentApplication } from "../../../aplication/payment/payment.application";
import { Request, Response } from "express";

export class PaymentController {
  constructor(private paymentApplication: PaymentApplication) { }
  async run(req: Request, res: Response) {
    const { id, status, amount, userId, createdAt } = req.body;
    const payment = await this.paymentApplication.run(id, status, amount, userId, createdAt);
    res.json({
      code: 200,
      status: payment,
      message: "Payment success"
    });
  }
}
