import { ZodSchema, z } from "zod";
import { ListDiscountsRequest } from "./ListDiscountsRequest";
import { BaseControllerValidator } from "@/app/BaseControllerValidator";

export class ListDiscountsControllerValidator extends BaseControllerValidator<ListDiscountsRequest> {
  get schema(): ZodSchema {
    return z.object({
      productUuid: z.string().uuid("O campo 'productUuid' precisa ser um UUID válido")
    });
  }
}
