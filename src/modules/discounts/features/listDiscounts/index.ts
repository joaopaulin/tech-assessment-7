import { DiscountsRepository } from "@/core/repositories";
import { discountsRepository } from "@/infra/repositories";
import { ListDiscountsController } from "./ListDiscountsController";
import { ListDiscountsControllerValidator } from "./ListDiscountsControllerValidator";
import { ListDiscountsUseCase } from "./ListDiscountsUseCase";

const repository: DiscountsRepository = discountsRepository;
const useCase = new ListDiscountsUseCase(repository);
const validator = new ListDiscountsControllerValidator();
export const controller = new ListDiscountsController(useCase, validator);
