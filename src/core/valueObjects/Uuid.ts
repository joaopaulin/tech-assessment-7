import { randomUUID } from "node:crypto";
import { InvalidParameterValueError } from "../errors/InvalidParameterValueError";

export default class Uuid {
  private readonly props: {
    value: string;
  };

  constructor(value: string) {
    if (!Uuid.isValid(value)) throw new InvalidParameterValueError("value", value);
    this.props = { value };
  }

  get value(): string {
    return this.props.value;
  }

  public toString(): string {
    return this.props.value;
  }

  public static new(): Uuid {
    return new Uuid(randomUUID());
  }

  public static isValid(uuid: string): boolean {
    return /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi.test(uuid);
  }
}
