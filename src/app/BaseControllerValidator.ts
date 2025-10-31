import { InputValidationResult, InputValidator } from "@/presentation/contracts/InputValidator";
import { ZodSchema } from "zod";

export abstract class BaseControllerValidator<T> implements InputValidator<T> {
  abstract get schema(): ZodSchema;

  validate(input: T): InputValidationResult {
    const result: InputValidationResult = {
      message: "",
      isValid: false,
      details: {}
    };
    const parsedResult = this.schema.safeParse(input);
    result.isValid = parsedResult.success;
    if (parsedResult.success) {
      result.message = "Validação ok";
    } else {
      result.message = "Falha na validação: ";
      parsedResult.error.issues.forEach((error: any) => (result.details[error.path[0] as string] = error.message));
      result.message += Object.values(result.details).join(",");
    }
    return result;
  }
}
