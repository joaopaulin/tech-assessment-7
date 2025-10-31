import { BaseController } from "@/app/BaseController";
import { InputValidator } from "@/presentation/contracts/InputValidator";
import { Request, Response } from "express";
import { GetDiscountByCodeRequest } from "./GetDiscountByCodeRequest";
import { GetDiscountByCodeResponse } from "./GetDiscountByCodeResponse";
import { GetDiscountByCodeUseCase } from "./GetDiscountByCodeUseCase";

export class GetDiscountByCodeController extends BaseController {
  constructor(
    private readonly useCase: GetDiscountByCodeUseCase,
    private readonly validator: InputValidator<GetDiscountByCodeRequest>
  ) {
    super();
  }

  async handle(request: Request, response: Response) {
    try {
      const { code } = request.params;
      const validationResult = this.validator.validate({ code });
      if (!validationResult.isValid) {
        return this.sendBadRequest(response, validationResult);
      }

      const useCaseResponse: GetDiscountByCodeResponse = await this.useCase.execute({ code });
      return this.sendJson(response, useCaseResponse);
    } catch (e: any) {
      return this.sendErrorJson(response, e);
    }
  }
}
