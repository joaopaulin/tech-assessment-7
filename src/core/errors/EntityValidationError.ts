export class EntityValidationError extends Error {
  constructor(entityName: string, validationMessage: string) {
    super();
    this.message = `Erro ao instanciar ${entityName}: ${validationMessage}.`;
    this.name = "EntityValidationError";
    this.cause = "Application handled error";
  }
}
