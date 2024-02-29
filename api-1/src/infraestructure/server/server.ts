import express from 'express';
import paymentRouter from '../payment/payment.routes';
import cors from 'cors'
export class Server {
  private readonly app: express.Express;
  constructor() {
    this.app = express(); 
    this.app.use(cors({
      origin: ['http://34.206.25.41:4000']
    }))
    this.app.use(express.json());
    this.app.use('/api/payment', paymentRouter)
  }

  start() {
    this.app.listen(3000, () => {
      console.log('Server-1 is running on port 3000')
    })
  }
}
