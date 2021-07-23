export class Product {
  public id:number;
  public name: string;
  private _price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this._price = price;

    this.validation();
  }

  validation() {
    if (this.validationId()) {
      throw new Error('id 로직에 문제 있음');
    }
    return null;
  }

  validationId() {
    if (typeof this.id !== 'number' && this.id > 0 && !Number.isInteger(this.id)) {
      return false;
    }
    return true;
  }

  getRegPrice(): number {
    return Math.floor(this._price * 0.9);
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (typeof value !== 'number' || value < 0) return;
    this._price = value;
  }
}
