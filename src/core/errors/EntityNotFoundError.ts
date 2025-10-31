export class EntityNotFoundError extends Error {
  constructor(entityName: string, identifier: string) {
    super();
    this.message = `A entidade ${entityName} identificada por '${identifier}' não pode ser encontrada`;
    this.name = "EntityNotFoundError";
    this.cause = "Application handled error";
  }
}
