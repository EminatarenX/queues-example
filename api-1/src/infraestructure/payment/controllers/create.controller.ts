import { Request, Response } from "express";
import { CreatePayment } from "../../../application/payment/create.application";

export class CreatePaymentController {
  constructor(private readonly createUseCase: CreatePayment) { }

  async run(req: Request, res: Response) {
    try {
      const { amount, userId } = req.body
      const data = await this.createUseCase.run(amount, userId)
      res.status(200).json({
        success: data,
        code: 200,
        message: 'OK'
      })
    } catch (error: unknown) {
      res.status(400).json({
        code: 400, message: 'internal server error', error,
      })
    }
  }
}
