export class User {
  public id: number;
  private _createdAt: Date;

  constructor(id: number) {
    this.id = id;
    this._createdAt = new Date();
  }

  isTodayCreated(): boolean {
    return this._createdAt.getDate() === new Date().getDate();
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }
}
