import { Payment } from "./payment";

export interface IPayment {
  payment(id: string, status: string, amount: number, userid: string, createdAt: Date): Promise<Payment>;
}
