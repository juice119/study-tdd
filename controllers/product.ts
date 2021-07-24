// @ts-ignore
import * as express from 'express';
import Product from '../models/Product';

type Request = express.Request;
type Response = express.Response;
type Next = express.NextFunction;
type retType = Request | Next;

export async function createProduct(req: Request, res: Response, next: Next): Promise<retType> {
  try {
    const productResult = await Product.create(req.body);
    return res.json(req.body);
  } catch (e) {
    return next(e);
  }
}
