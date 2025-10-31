import { Discount } from "@/core/entities/Discount";
import { EntityNotFoundError } from "@/core/errors";
import { DiscountsRepository } from "../../core/repositories/DiscountsRepository";

export class InMemoryDiscountsRepository implements DiscountsRepository {
  private readonly discounts: Map<string, Discount> = new Map();

  async create(discount: Discount): Promise<void> {
    this.discounts.set(discount.uuid, discount);
  }

  async find(uuid: string): Promise<Discount> {
    const discount = this.discounts.get(uuid);
    if (!discount) {
      throw new EntityNotFoundError("Discount", uuid);
    }
    return discount;
  }

  async findByCode(code: string): Promise<Discount | null> {
    for (const discount of this.discounts.values()) {
      if (discount.code === code) {
        return discount;
      }
    }
    return null;
  }

  async listAll(): Promise<Discount[]> {
    return Array.from(this.discounts.values());
  }

  async update(discount: Discount): Promise<void> {
    const existingDiscount = this.discounts.get(discount.uuid);
    if (!existingDiscount) {
      throw new EntityNotFoundError("Discount", discount.uuid);
    }
    this.discounts.set(discount.uuid, discount);
  }

  async delete(uuid: string): Promise<void> {
    const discount = this.discounts.get(uuid);
    if (!discount) {
      throw new EntityNotFoundError("Discount", uuid);
    }
    this.discounts.delete(uuid);
  }
}
