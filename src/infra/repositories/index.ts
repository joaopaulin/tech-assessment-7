import { DiscountsRepository } from "@/core/repositories";
import { InMemoryDiscountsRepository } from "./InMemoryDiscountsRepository";

const discountsRepository: DiscountsRepository = new InMemoryDiscountsRepository();
export * from "./InMemoryDiscountsRepository";
export { discountsRepository };
