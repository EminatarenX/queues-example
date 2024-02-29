import { IPayment } from "../../domain/payment/payment.interface";

import { ISocketIOInterface } from "../../domain/services/Isocket.io";

export class PaymentApplication {
  constructor(private payment: IPayment, private socket: ISocketIOInterface) { }
  async run(id: string, status: string, amount: number, userId: string, createdAt: Date) {
    console.log(id, status, amount, userId, createdAt)
    const payment = await this.payment.payment(id, status, amount, userId, createdAt);
    this.socket.emit("payment", payment);
    console.log('payment-saved')
    return true
  }
}
