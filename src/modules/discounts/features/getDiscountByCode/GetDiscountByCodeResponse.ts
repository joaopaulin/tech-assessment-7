import { DiscountConstants } from "@/core/entities/Discount";

export type GetDiscountByCodeResponse = {
  uuid: string;
  productUuid: string;
  code: string;
  type: DiscountConstants.Type;
  value: number;
  status: boolean;
  expiresAt: Date | null;
};
