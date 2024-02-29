import express from 'express'
import PaymentRouter from "../payment/payment.routes"
export class Server {
  private app: express.Express
  private port: number

  constructor() {
    this.port = 3001
    this.app = express()
    this.app.use(express.json())
    this.app.use('/api/payment', PaymentRouter)
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`)
    })
  }
}
