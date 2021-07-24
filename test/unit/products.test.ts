import { createProduct } from '../../controllers/product';
import Product from '../../models/Product';
import newProducts from '../data/new-product.json'
import httpMocks from 'node-mocks-http';
import { Request, Response } from 'express';

Product.create = jest.fn();
let req: Request, res: Response, next: null;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  req.body = newProducts;
  next = null;
});

describe("Product Controller Create", () => {
  it("should have a createProduct function", () => {
    expect(typeof createProduct).toBe("function");
  });

  it("should call ProductModel.create", async () => {
    await createProduct(req, res, next);
    const resResult = res._getJSONData();
    expect(resResult).toStrictEqual(newProducts);
  });
});
