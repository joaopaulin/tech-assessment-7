import { Router } from "express";
import { controller as createDiscountController } from "@/modules/discounts/features/createDiscount";
import { controller as listDiscountsController } from "@/modules/discounts/features/listDiscounts";
import { controller as getDiscountByCodeController } from "@/modules/discounts/features/getDiscountByCode";

export const discountsRoutes = Router();
discountsRoutes.post(
  "/products/:productUuid/discounts",
  async (req, res, next) => await createDiscountController.handle(req, res)
);
discountsRoutes.get(
  "/products/:productUuid/discounts",
  async (req, res, next) => await listDiscountsController.handle(req, res)
);
discountsRoutes.get(
  "/products/:productUuid/discounts/:code",
  async (req, res, next) => await getDiscountByCodeController.handle(req, res)
);
