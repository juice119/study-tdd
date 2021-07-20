export class Product {
  public id:number;
  public name: string;
  private _price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this._price = price;
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