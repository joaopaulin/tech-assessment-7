import { Discount } from "@/core/entities";
import { DiscountsRepository } from "@/core/repositories/DiscountsRepository";
import { UseCase } from "@/core/useCases/UseCase";
import { CreateDiscountRequest } from "./CreateDiscountRequest";
import { CreateDiscountResponse } from "./CreateDiscountResponse";

export class CreateDiscountUseCase implements UseCase<CreateDiscountRequest, CreateDiscountResponse> {
  constructor(private readonly discountsRepository: DiscountsRepository) {}

  async execute(input: CreateDiscountRequest): Promise<CreateDiscountResponse> {
    const { productUuid, code, type, value, status, expiresAt } = input;
    const discount = await this.discountsRepository.findByCode(code);

    if (!discount) {
      const discount = new Discount({
        productUuid,
        code,
        type,
        value,
        status: status ?? true,
        expiresAt: expiresAt ? new Date(expiresAt) : null
      });
      await this.discountsRepository.create(discount);

      return {
        uuid: discount.uuid,
        productUuid,
        code,
        type,
        value,
        status, // BUG: Should return discount.status instead of input status
        expiresAt
      };
    } else {
      throw new UnableToCreateDiscountError("Já existe desconto com o código " + code);
    }
  }
}
