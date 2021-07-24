import { createProduct } from '../../controllers/product';
import Product from '../../models/Product';
import newProducts from '../data/new-product.json'
import httpMocks from 'node-mocks-http';

Product.create = jest.fn();

describe("Product Controller Create", () => {
  it("should have a createProduct function", () => {
    expect(typeof createProduct).toBe("function");
  });
  it("should call ProductModel.create", async () => {
    let req = httpMocks.createRequest();
    let res = httpMocks.createResponse();
    let next = null;
    req.body = newProducts;
    await createProduct(req, res, next);
    const resResult = res._getJSONData();
    expect(resResult)
      .toStrictEqual(newProducts);
  });
});
