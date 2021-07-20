import { createProduct } from '../../controllers/product';
import Product from '../../models/Product';

Product.create = jest.fn();

describe("Product Controller Create", () => {
  it("should have a createProduct function", () => {
    expect(typeof createProduct).toBe("function");
  });
  it("should call ProductModel.create", () => {
    createProduct();
    expect(Product.create).toBeCalled();
  });
});
