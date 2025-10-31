export class UnableToCreateDiscountError extends Error {
  constructor(details?: string) {
    super();
    this.message = "Não foi possível criar um desconto";
    if (details) this.message = `${this.message}. ${details}`;
    this.name = "UnableToCreateDiscountError";
    this.cause = "Application handled error";
  }
}
