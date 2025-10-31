import { BaseController } from "@/app/BaseController";
import { InputValidator } from "@/presentation/contracts/InputValidator";
import { Request, Response } from "express";
import { CreateDiscountRequest } from "./CreateDiscountRequest";
import { CreateDiscountResponse } from "./CreateDiscountResponse";
import { CreateDiscountUseCase } from "./CreateDiscountUseCase";

export class CreateDiscountController extends BaseController {
  constructor(
    private readonly useCase: CreateDiscountUseCase,
    private readonly validator: InputValidator<CreateDiscountRequest>
  ) {
    super();
  }

  async handle(request: Request, response: Response) {
    try {
      const { productUuid } = request.params;
      const validationResult = this.validator.validate(Object.assign(request.body, { productUuid }));
      if (!validationResult.isValid) {
        return this.sendBadRequest(response, validationResult);
      }

      const { code, type, value, status, expiresAt } = request.body;
      const useCaseResponse: CreateDiscountResponse = await this.useCase.execute({
        productUuid,
        code,
        type,
        value,
        status,
        expiresAt
      });
      return this.sendJson(response, useCaseResponse);
    } catch (e: any) {
      return this.sendErrorJson(response, e);
    }
  }
}
