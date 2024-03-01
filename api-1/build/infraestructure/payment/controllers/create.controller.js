"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentController = void 0;
class CreatePaymentController {
    constructor(createUseCase) {
        this.createUseCase = createUseCase;
    }
    async run(req, res) {
        try {
            const { amount, userId } = req.body;
            const data = await this.createUseCase.run(amount, userId);
            res.status(200).json({
                success: data,
                code: 200,
                message: 'OK'
            });
        }
        catch (error) {
            res.status(400).json({
                code: 400, message: 'internal server error', error,
            });
        }
    }
}
exports.CreatePaymentController = CreatePaymentController;
//# sourceMappingURL=create.controller.js.map