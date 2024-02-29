import { PaymentRepository } from "../../infraestructure/payment/payment.repository";
import { Payment } from "../../domain/payment/Payment";
import { IAmqpService } from "../../domain/amqp/IAmqp.interface";
export class CreatePayment {
  constructor(private readonly paymentRepository: PaymentRepository, private readonly amqpService: IAmqpService) { }

  async run(amount: number, userId: string): Promise<boolean> {
    const payment = await this.paymentRepository.create(amount, userId)
    this.amqpService.publishInQueue('payments', JSON.stringify(payment))
    console.log('payment-sended')
    return true
  }
}
