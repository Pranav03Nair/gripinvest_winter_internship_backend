import { Request, Response } from 'express';
import * as productController from '../../src/controllers/product.controller';
import * as productService from '../../src/services/product.service';
import { sendSuccess } from '../../src/utils/sendResponse.util';
import { AuthRequest } from '../../src/middleware/authenticate.middleware';

// Mock dependencies
jest.mock('../../src/services/product.service');
jest.mock('../../src/utils/sendResponse.util');

describe('Product Controller', () => {
  let req: Partial<AuthRequest>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = {
      body: {},
      params: {},
      user: {
        id: 'admin-id',
        role: 'admin',
        first_name: 'Admin',
        last_name: 'User',
        email: 'admin@example.com',
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    jest.clearAllMocks();
  });

  describe('createProduct', () => {
    it('should create product and return success response', async () => {
      const mockProduct = { id: '1', name: 'Test Product', price: 100 };
      req.body = { name: 'Test Product', price: 100 };

      (productService.createProduct as jest.Mock).mockResolvedValue(
        mockProduct,
      );
      (sendSuccess as jest.Mock).mockReturnValue(res);

      await productController.createProduct(
        req as AuthRequest,
        res as Response,
      );

      expect(productService.createProduct).toHaveBeenCalledWith(
        'admin-id',
        req.body,
      );
      expect(sendSuccess).toHaveBeenCalledWith(
        res,
        mockProduct,
        201,
        'Successfully created new Product',
      );
    });
  });

  describe('updateProduct', () => {
    it('should update product and return success response', async () => {
      const mockProduct = { id: '1', name: 'Updated Product', price: 150 };
      req.params = { productId: '1' };
      req.body = { name: 'Updated Product', price: 150 };

      (productService.updateProduct as jest.Mock).mockResolvedValue(
        mockProduct,
      );
      (sendSuccess as jest.Mock).mockReturnValue(res);

      await productController.updateProduct(
        req as AuthRequest,
        res as Response,
      );

      expect(productService.updateProduct).toHaveBeenCalledWith('1', req.body);
      expect(sendSuccess).toHaveBeenCalledWith(
        res,
        mockProduct,
        200,
        'Successfully updated product',
      );
    });
  });

  describe('deleteProduct', () => {
    it('should delete product and return success response', async () => {
      req.params = { productId: '1' };

      (productService.deleteProduct as jest.Mock).mockResolvedValue(undefined);
      (sendSuccess as jest.Mock).mockReturnValue(res);

      await productController.deleteProduct(
        req as AuthRequest,
        res as Response,
      );

      expect(productService.deleteProduct).toHaveBeenCalledWith('1');
      expect(sendSuccess).toHaveBeenCalledWith(
        res,
        null,
        200,
        'Succefully deleted product',
      );
    });
  });

  describe('getAllProducts', () => {
    it('should get all products and return success response', async () => {
      const mockProducts = [
        { id: '1', name: 'Product 1', price: 100 },
        { id: '2', name: 'Product 2', price: 200 },
      ];

      (productService.getAllProducts as jest.Mock).mockResolvedValue(
        mockProducts,
      );
      (sendSuccess as jest.Mock).mockReturnValue(res);

      await productController.getAllProducts(req as Request, res as Response);

      expect(productService.getAllProducts).toHaveBeenCalled();
      expect(sendSuccess).toHaveBeenCalledWith(
        res,
        mockProducts,
        200,
        'Successfully fetched all products',
      );
    });
  });

  describe('getProductById', () => {
    it('should get product by id and return success response', async () => {
      const mockProduct = { id: '1', name: 'Test Product', price: 100 };
      req.params = { productId: '1' };

      (productService.getProductById as jest.Mock).mockResolvedValue(
        mockProduct,
      );
      (sendSuccess as jest.Mock).mockReturnValue(res);

      await productController.getProductById(req as Request, res as Response);

      expect(productService.getProductById).toHaveBeenCalledWith('1');
      expect(sendSuccess).toHaveBeenCalledWith(
        res,
        mockProduct,
        200,
        'Sucessfully fetched the product',
      );
    });
  });

  describe('getRecommendedProducts', () => {
    it('should get recommended products and return success response', async () => {
      const mockRecommendations = [
        { id: '1', name: 'Recommended Product 1', price: 100 },
        { id: '2', name: 'Recommended Product 2', price: 200 },
      ];

      (productService.getRecommendedProducts as jest.Mock).mockResolvedValue(
        mockRecommendations,
      );
      (sendSuccess as jest.Mock).mockReturnValue(res);

      await productController.getRecommendedProducts(
        req as AuthRequest,
        res as Response,
      );

      expect(productService.getRecommendedProducts).toHaveBeenCalledWith(
        'admin-id',
      );
      expect(sendSuccess).toHaveBeenCalledWith(
        res,
        mockRecommendations,
        200,
        'Recommended products fetched',
      );
    });
  });
});
