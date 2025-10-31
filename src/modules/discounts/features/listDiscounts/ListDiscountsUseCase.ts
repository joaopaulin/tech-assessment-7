import { DiscountsRepository } from "@/core/repositories/DiscountsRepository";
import { UseCase } from "@/core/useCases/UseCase";
import { ListDiscountsRequest } from "./ListDiscountsRequest";
import { ListDiscountsResponse } from "./ListDiscountsResponse";

export class ListDiscountsUseCase implements UseCase<ListDiscountsRequest, ListDiscountsResponse> {
  constructor(private readonly discountsRepository: DiscountsRepository) {}

  async execute(input: ListDiscountsRequest): Promise<ListDiscountsResponse> {
    const { productUuid } = input;
    const allDiscounts = await this.discountsRepository.listAll();

    const filteredDiscounts = allDiscounts.filter(discount => discount.productUuid === productUuid);

    return {
      discounts: filteredDiscounts.map(discount => ({
        uuid: discount.uuid,
        productUuid: discount.productUuid,
        code: discount.code,
        type: discount.type,
        value: discount.value,
        status: discount.status,
        expiresAt: discount.expiresAt
      }))
    };
  }
}
