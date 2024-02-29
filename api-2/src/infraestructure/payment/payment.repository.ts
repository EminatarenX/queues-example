import { Payment } from "../../domain/payment/payment";
import { IPayment } from "../../domain/payment/payment.interface";
import { PrismaClient } from "@prisma/client";

export class PaymentRepository implements IPayment {
  private db: PrismaClient
  constructor(){
    this.db = new PrismaClient()
  }
  async payment(id: string, status: string, amount: number, userId: string, createdAt: Date): Promise<Payment> {
    const payment = await this.db.payment.update({
      data: {
        status: "success"
      },
      where: {
        id
      }
    })
    // const payment = {
    //   id,
    //   status,
    //   amount,
    //   userId,
    //   createdAt
    // }

    return new Payment(payment.id, payment.amount, "success", payment.userId, payment.createdAt);
  }

}
