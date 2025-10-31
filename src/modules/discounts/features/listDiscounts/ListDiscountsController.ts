import { BaseController } from "@/app/BaseController";
import { InputValidator } from "@/presentation/contracts/InputValidator";
import { Request, Response } from "express";
import { ListDiscountsRequest } from "./ListDiscountsRequest";
import { ListDiscountsResponse } from "./ListDiscountsResponse";
import { ListDiscountsUseCase } from "./ListDiscountsUseCase";

export class ListDiscountsController extends BaseController {
  constructor(
    private readonly useCase: ListDiscountsUseCase,
    private readonly validator: InputValidator<ListDiscountsRequest>
  ) {
    super();
  }

  async handle(request: Request, response: Response) {
    try {
      const { productUuid } = request.params;
      const validationResult = this.validator.validate({ productUuid });
      if (!validationResult.isValid) {
        return this.sendBadRequest(response, validationResult);
      }

      const useCaseResponse: ListDiscountsResponse = await this.useCase.execute({
        productUuid
      });
      return this.sendJson(response, useCaseResponse);
    } catch (e: any) {
      return this.sendErrorJson(response, e);
    }
  }
}
