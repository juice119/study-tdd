import { createProduct } from '../../controllers/product';

describe("Product Controller Create", () => {
  it("should have a createProduct function", () => {
    expect(typeof createProduct).toBe("function");
  });
});
