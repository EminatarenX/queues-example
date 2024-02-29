import { IPayment } from "../../domain/payment/IPayment.interface";
import { PrismaClient } from '@prisma/client';
import { Payment } from "../../domain/payment/Payment";
export class PaymentRepository implements IPayment {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async create(amount: number, userId: string): Promise<Payment> {
    const payment = await this.prisma.payment.create({
      data: {
        amount,
        status: 'PENDING',
        userId,
      }
    });

    return new Payment(
      payment.id,
      payment.amount,
      payment.status,
      payment.userId,
      payment.createdAt
    )
  }
}
