export class Payment {
  constructor(
    public readonly id: string,
    public readonly amount: number,
    public readonly status: string,
    public readonly userId: string,
    public readonly createdAt: Date,
  ) { }
}
