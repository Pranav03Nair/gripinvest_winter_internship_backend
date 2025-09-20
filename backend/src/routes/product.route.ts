import { Router } from 'express';
import {
  productSchema,
  updateProductSchema,
} from '../validators/product.validator';
import { validateRequest } from '../middleware/validateRequest.middleware';
import { catchAsync } from '../utils/catchAsync.util';
import { authenticate } from '../middleware/authenticate.middleware';
import { isAdmin } from '../middleware/isAdmin.middleware';
import * as productController from '../controllers/product.controller';

const router = Router();

// R
router.get('/', catchAsync(productController.getAllProducts));
router.get(
  '/recommendations',
  authenticate,
  catchAsync(productController.getRecommendedProducts),
);
router.get('/:productId', catchAsync(productController.getProductById));

// --Middleware--
router.use(authenticate);

// C
router.post(
  '/create',
  isAdmin,
  validateRequest(productSchema),
  catchAsync(productController.createProduct),
);

// U
router.put(
  '/:productId/update',
  isAdmin,
  validateRequest(updateProductSchema),
  productController.updateProduct,
);

// D
router.delete('/:productId/delete', isAdmin, productController.deleteProduct);

export default router;
