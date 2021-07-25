// @ts-ignore
import * as express from 'express';
import Product from '../models/Product';

type Request = express.Request;
type Response = express.Response;
type Next = express.NextFunction | null;

export async function createProduct(req: Request, res: Response, next: Next): Promise<Response> {
  try {
    const createResult = Product.create(req.body);
    return res.status(201).json(createResult);
  } catch (e) {
    // @ts-ignore
    return next(e);
  }
}
