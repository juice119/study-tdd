import { createProduct as productControl } from '../../controllers/product';
import ProductModel  from '../../models/Product';
import newProducts from '../data/new-product.json'
import { MockRequest, MockResponse, createResponse, createRequest }  from 'node-mocks-http';
import { Request, Response } from 'express';

ProductModel.create = jest.fn();

let req: MockRequest<Request>, res: MockResponse<Response>, next: null;
beforeEach(() => {
  req = createRequest<Request>();
  res = createResponse<Response>();
  req.body = newProducts;
  next = null;
});

describe("Product Controller Create", () => {

  it("should have a createProduct function", () => {
    expect(typeof productControl).toBe("function");
  });

  it("should call ProductModel.create", async () => {
    await productControl(req, res, next);
    const resResult = res._getJSONData();
    expect(res.statusCode).toBe(201);
    expect(res._isJSON()).toBeTruthy();
    expect(res._isEndCalled()).toBeTruthy();
    expect(resResult).toStrictEqual(newProducts);
  });

  it('should return json body in response', () => {
    // @ts-ignore
    ProductModel.create.mockReturnValue(newProducts);
    productControl(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newProducts);
  });
});
