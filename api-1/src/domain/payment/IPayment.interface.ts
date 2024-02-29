import { Payment } from "./Payment";
export interface IPayment {
  create(amount: number, userId: string): Promise<Payment>;
}
