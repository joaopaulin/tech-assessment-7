export class InvalidParameterValueError extends Error {
  public details?: string;

  constructor(paramName: string, value?: string, acceptedValues?: string | string[]) {
    super();
    this.message = `O conteúdo '${value}' é inválido para '${paramName}'.`;
    if (acceptedValues) {
      const values = typeof acceptedValues === "string" ? acceptedValues : acceptedValues.join(", ");
      this.message += " Conteúdo válido: " + values;
      this.details = values;
    }
    this.name = "InvalidParameterValueError";
    this.cause = "Application handled error";
  }
}
