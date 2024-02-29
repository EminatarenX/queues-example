import amqplib from 'amqplib'
export interface IAmqpService {
  publishInQueue(queue: string, message: string): void;
  consume(queue: string, callback: (message: amqplib.ConsumeMessage | null) => void): void;
}
