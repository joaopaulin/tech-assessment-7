import { Discount } from "@/core/entities/Discount";

export interface DiscountsRepository {
  create: (discount: Discount) => Promise<void>;
  find: (uuid: string) => Promise<Discount>;
  findByCode: (code: string) => Promise<Discount | null>;
  listAll: () => Promise<Discount[]>;
  update: (discount: Discount) => Promise<void>;
  delete: (uuid: string) => Promise<void>;
}
