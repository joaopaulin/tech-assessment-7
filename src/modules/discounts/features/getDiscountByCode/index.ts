import { DiscountsRepository } from "@/core/repositories";
import { discountsRepository } from "@/infra/repositories";
import { GetDiscountByCodeController } from "./GetDiscountByCodeController";
import { GetDiscountByCodeControllerValidator } from "./GetDiscountByCodeControllerValidator";
import { GetDiscountByCodeUseCase } from "./GetDiscountByCodeUseCase";

const repository: DiscountsRepository = discountsRepository;
const useCase = new GetDiscountByCodeUseCase(repository);
const validator = new GetDiscountByCodeControllerValidator();
export const controller = new GetDiscountByCodeController(useCase, validator);
