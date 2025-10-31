import { ZodSchema, z } from "zod";
import { GetDiscountByCodeRequest } from "./GetDiscountByCodeRequest";
import { BaseControllerValidator } from "@/app/BaseControllerValidator";

export class GetDiscountByCodeControllerValidator extends BaseControllerValidator<GetDiscountByCodeRequest> {
  get schema(): ZodSchema {
    return z.object({
      code: z
        .string()
        .min(3, "Código do cupom precisa ter no mínimo 3 caracteres")
        .max(30, "Código do cupom deve ter no máximo 30 caracteres")
    });
  }
}
