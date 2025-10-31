export class UnableToDeleteDiscountError extends Error {
  constructor(details?: string) {
    super();
    this.message = "Não foi possível excluir o desconto";
    if (details) this.message = `${this.message}. ${details}`;
    this.name = "UnableToDeleteDiscountError";
    this.cause = "Application handled error";
  }
}
