import { Request, Response } from 'express';
import { AuthRequest } from '../middleware/authenticate.middleware';
import { sendSuccess } from '../utils/sendResponse.util';

import * as productService from '../services/product.service';

export const createProduct = async (req: AuthRequest, res: Response) => {
  const adminId = req.user?.id!;
  const newProduct = await productService.createProduct(adminId, req.body);
  return sendSuccess(res, newProduct, 201, 'Successfully created new Product');
};

export const updateProduct = async (req: AuthRequest, res: Response) => {
  const productId = req.params.productId;
  const updatedProduct = await productService.updateProduct(
    productId,
    req.body,
  );
  return sendSuccess(res, updatedProduct, 200, 'Successfully updated product');
};

export const deleteProduct = async (req: AuthRequest, res: Response) => {
  const productId = req.params.productId;
  await productService.deleteProduct(productId);
  return sendSuccess(res, null, 200, 'Succefully deleted product');
};

export const getAllProducts = async (_req: Request, res: Response) => {
  const products = await productService.getAllProducts();
  return sendSuccess(res, products, 200, 'Successfully fetched all products');
};

export const getProductById = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const product = await productService.getProductById(productId);
  return sendSuccess(res, product, 200, 'Sucessfully fetched the product');
};

export const getRecommendedProducts = async (
  req: AuthRequest,
  res: Response,
) => {
  const userId = req.user?.id!;
  const recommendations = await productService.getRecommendedProducts(userId);
  return sendSuccess(res, recommendations, 200, 'Recommended products fetched');
};
