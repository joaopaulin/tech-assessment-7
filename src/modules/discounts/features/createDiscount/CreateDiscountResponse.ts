import { DiscountConstants } from "@/core/entities";

export interface CreateDiscountResponse {
  uuid: string;
  productUuid: string;
  code: string;
  type: DiscountConstants.Type;
  value: number;
  status: boolean;
  expiresAt?: Date | null;
}
