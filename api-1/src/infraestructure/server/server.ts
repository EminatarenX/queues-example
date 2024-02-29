import express from 'express';
import paymentRouter from '../payment/payment.routes';

export class Server {
  private readonly app: express.Express;
  constructor() {
    this.app = express(); this.app.use(express.json());
    this.app.use('/api/payment', paymentRouter)
  }

  start() {
    this.app.listen(3000, () => {
      console.log('Server-1 is running on port 3000')
    })
  }
}
