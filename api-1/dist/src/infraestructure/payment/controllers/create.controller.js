"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentController = void 0;
class CreatePaymentController {
    constructor(createUseCase) {
        this.createUseCase = createUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { amount, userId } = req.body;
                const data = yield this.createUseCase.run(amount, userId);
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
        });
    }
}
exports.CreatePaymentController = CreatePaymentController;
