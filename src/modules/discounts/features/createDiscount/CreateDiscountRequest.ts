import { DiscountConstants } from "@/core/entities";

export interface CreateDiscountRequest {
  productUuid: string;
  code: string;
  type: DiscountConstants.Type;
  value: number;
  status: boolean;
  expiresAt?: Date | null;
}
