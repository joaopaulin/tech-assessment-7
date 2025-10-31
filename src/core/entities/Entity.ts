import Uuid from "@/core/valueObjects/Uuid";

type EntityPropsType = {
  uuid?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
};

class Entity {
  private readonly _id: number | null = null;
  private _uuid: Uuid = Uuid.new();
  private _createdAt: Date = new Date();
  private _updatedAt: Date = new Date();

  constructor(props: EntityPropsType) {
    if (props.uuid) this.uuid = props.uuid;
    if (props.createdAt) this.createdAt = props.createdAt;
    if (props.updatedAt) this.updatedAt = props.updatedAt;
    return new Proxy(this, {
      set(target, property, value) {
        target._updatedAt = new Date();

        return Reflect.set(target, property, value);
      }
    });
  }

  public isNew(): boolean {
    return !this._id;
  }

  public get uuid(): string {
    return this._uuid.toString();
  }

  protected set uuid(value: string) {
    this._uuid = new Uuid(value);
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  private set createdAt(date: Date) {
    this._createdAt = date;
  }

  public get updatedAt(): Date {
    return this._updatedAt;
  }

  public set updatedAt(date: Date) {
    this._updatedAt = date;
  }
}

export { Entity, EntityPropsType };
