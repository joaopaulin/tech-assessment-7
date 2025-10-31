import { DiscountsRepository } from "@/core/repositories";
import { discountsRepository } from "@/infra/repositories";
import { CreateDiscountController } from "./CreateDiscountController";
import { CreateDiscountControllerValidator } from "./CreateDiscountControllerValidator";
import { CreateDiscountUseCase } from "./CreateDiscountUseCase";

const repository: DiscountsRepository = discountsRepository;
const useCase = new CreateDiscountUseCase(repository);
const validator = new CreateDiscountControllerValidator();
export const controller = new CreateDiscountController(useCase, validator);
