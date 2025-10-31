export class UnableToUpdateDiscountError extends Error {
  constructor(details?: string) {
    super();
    this.message = "Não foi possível atualizar o desconto";
    if (details) this.message = `${this.message}. ${details}`;
    this.name = "UnableToUpdateDiscountError";
    this.cause = "Application handled error";
  }
}
