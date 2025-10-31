import { DiscountConstants } from "@/core/entities";

export interface ListDiscountsResponse {
  discounts: Array<{
    uuid: string;
    productUuid: string;
    code: string;
    type: DiscountConstants.Type;
    value: number;
    status: boolean;
    expiresAt?: Date | null;
  }>;
}
