export type InputValidationResult = {
  message: string;
  isValid: boolean;
  details: { [x: string]: string };
};

export interface InputValidator<T> {
  validate: (input: T) => InputValidationResult;
}
