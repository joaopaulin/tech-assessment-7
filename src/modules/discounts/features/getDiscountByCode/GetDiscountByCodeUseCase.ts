import { DiscountsRepository } from "@/core/repositories/DiscountsRepository";
import { UseCase } from "@/core/useCases/UseCase";
import { GetDiscountByCodeRequest } from "./GetDiscountByCodeRequest";
import { GetDiscountByCodeResponse } from "./GetDiscountByCodeResponse";
import { EntityNotFoundError } from "@/core/errors";

export class GetDiscountByCodeUseCase implements UseCase<GetDiscountByCodeRequest, GetDiscountByCodeResponse> {
  constructor(private readonly discountsRepository: DiscountsRepository) {}

  async execute(input: GetDiscountByCodeRequest): Promise<GetDiscountByCodeResponse> {
    const { code } = input;
    const discount = await this.discountsRepository.findByCode(code);

    if (!discount) {
      throw new EntityNotFoundError("Discount", code);
    }

    return {
      uuid: discount.uuid,
      productUuid: discount.productUuid,
      code: discount.code,
      type: discount.type,
      value: discount.value,
      status: discount.status,
      expiresAt: discount.expiresAt
    };
  }
}
