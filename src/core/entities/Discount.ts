import { Entity, EntityPropsType } from "@/core/entities/Entity";
import { EntityValidationError, InvalidParameterValueError } from "@/core/errors";
import Uuid from "../valueObjects/Uuid";

export namespace DiscountConstants {
  export enum Type {
    VALUE = "VALUE",
    PERCENTAGE = "PERCENTAGE"
  }
}

type DiscountPropsType = {
  productUuid: string;
  code: string;
  type: DiscountConstants.Type;
  value: number;
  status?: boolean;
  expiresAt?: Date | null;
} & EntityPropsType;

export class Discount extends Entity {
  private _productUuid: Uuid;
  private _code: string = "";
  private _type: DiscountConstants.Type = DiscountConstants.Type.PERCENTAGE;
  private _value: number = 0;
  private _status: boolean = true;
  private _expiresAt: Date | null = null;

  constructor(props: DiscountPropsType) {
    super(props);
    const { productUuid, code, type, value, status, expiresAt } = props;
    this._productUuid = new Uuid(productUuid);
    this.code = code;
    this.type = type;
    this.value = value;
    this.status = status ?? true;
    this.expiresAt = expiresAt ?? null;
  }

  public get productUuid(): string {
    return this._productUuid.toString();
  }

  public set productUuid(value: string) {
    this._productUuid = new Uuid(value);
  }

  public get code(): string {
    return this._code;
  }

  public set code(value: string) {
    if (!value) throw new InvalidParameterValueError("code", value);
    if (/\s/g.test(value.trim()))
      throw new InvalidParameterValueError("name", value, "Não é permitido usar espaços em branco no código do cupom");
    this._code = value.trim();
  }

  public get type(): DiscountConstants.Type {
    return this._type;
  }

  public set type(type: DiscountConstants.Type) {
    if (!Object.values(DiscountConstants.Type).includes(type)) {
      throw new InvalidParameterValueError("Discount.type", type, Object.values(DiscountConstants.Type));
    }
    this._type = type;
  }

  public get value(): number {
    return this._value;
  }

  public set value(value: number) {
    if (this.type === DiscountConstants.Type.VALUE && value <= 0) {
      throw new EntityValidationError("Discount.value", "O valor deve ser maior que 0");
    }
    if (this.type === DiscountConstants.Type.PERCENTAGE && (value <= 0 || value > 100)) {
      throw new EntityValidationError(
        "Discount.value",
        "O percentual deve ser maior que 0 (zero) e menor ou igual a 100 (cem)"
      );
    }
    this._value = value;
  }

  public get status(): boolean {
    return this._status;
  }

  public set status(value: boolean) {
    this._status = value;
  }

  public set expiresAt(expiresAt: Date | null) {
    if (expiresAt && expiresAt.valueOf() < new Date().valueOf()) {
      throw new EntityValidationError("Discount.expiresAt", "Data de expiração não pode ser menor que a data atual");
    }
    this._expiresAt = expiresAt;
  }

  public get expiresAt(): Date | null {
    return this._expiresAt;
  }

  private validate(): void {
    if (this.type === DiscountConstants.Type.VALUE && this.value <= 0) {
      throw new EntityValidationError("Discount.value", "O valor deve ser maior que 0");
    }
    if (this.type === DiscountConstants.Type.PERCENTAGE && (this.value <= 0 || this.value > 100)) {
      throw new EntityValidationError(
        "Discount.value",
        "O percentual deve ser maior que 0 (zero) e menor ou igual a 100 (cem)"
      );
    }
    if (this.expiresAt !== null && this.expiresAt.valueOf() < new Date().valueOf()) {
      throw new EntityValidationError("Discount.expiresAt", "Data de expiração não pode ser menor que a data atual");
    }
  }
}
