import { ZodSchema, z } from "zod";
import { CreateDiscountRequest } from "./CreateDiscountRequest";
import { DiscountConstants } from "@/core/entities";
import { BaseControllerValidator } from "@/app/BaseControllerValidator";

export class CreateDiscountControllerValidator extends BaseControllerValidator<CreateDiscountRequest> {
  get schema(): ZodSchema {
    return z.object({
      productUuid: z.string().uuid("O campo 'productUuid' precisa ser um UUID válido"),
      code: z
        .string()
        .min(3, "Código do cupom precisa ter no mínimo 3 caracteres")
        .max(30, "Código do cupom deve ter no máximo 30 caracteres"),
      type: z.nativeEnum(DiscountConstants.Type),
      value: z.number().int(),
      status: z.boolean().nullable().optional(),
      expiresAt: z.string().datetime().nullable().optional()
    });
  }
}
