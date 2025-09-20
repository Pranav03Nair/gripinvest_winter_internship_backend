"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const productController = __importStar(require("../../src/controllers/product.controller"));
const productService = __importStar(require("../../src/services/product.service"));
const sendResponse_util_1 = require("../../src/utils/sendResponse.util");
// Mock dependencies
jest.mock('../../src/services/product.service');
jest.mock('../../src/utils/sendResponse.util');
describe('Product Controller', () => {
    let req;
    let res;
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
            productService.createProduct.mockResolvedValue(mockProduct);
            sendResponse_util_1.sendSuccess.mockReturnValue(res);
            await productController.createProduct(req, res);
            expect(productService.createProduct).toHaveBeenCalledWith('admin-id', req.body);
            expect(sendResponse_util_1.sendSuccess).toHaveBeenCalledWith(res, mockProduct, 201, 'Successfully created new Product');
        });
    });
    describe('updateProduct', () => {
        it('should update product and return success response', async () => {
            const mockProduct = { id: '1', name: 'Updated Product', price: 150 };
            req.params = { productId: '1' };
            req.body = { name: 'Updated Product', price: 150 };
            productService.updateProduct.mockResolvedValue(mockProduct);
            sendResponse_util_1.sendSuccess.mockReturnValue(res);
            await productController.updateProduct(req, res);
            expect(productService.updateProduct).toHaveBeenCalledWith('1', req.body);
            expect(sendResponse_util_1.sendSuccess).toHaveBeenCalledWith(res, mockProduct, 200, 'Successfully updated product');
        });
    });
    describe('deleteProduct', () => {
        it('should delete product and return success response', async () => {
            req.params = { productId: '1' };
            productService.deleteProduct.mockResolvedValue(undefined);
            sendResponse_util_1.sendSuccess.mockReturnValue(res);
            await productController.deleteProduct(req, res);
            expect(productService.deleteProduct).toHaveBeenCalledWith('1');
            expect(sendResponse_util_1.sendSuccess).toHaveBeenCalledWith(res, null, 200, 'Succefully deleted product');
        });
    });
    describe('getAllProducts', () => {
        it('should get all products and return success response', async () => {
            const mockProducts = [
                { id: '1', name: 'Product 1', price: 100 },
                { id: '2', name: 'Product 2', price: 200 },
            ];
            productService.getAllProducts.mockResolvedValue(mockProducts);
            sendResponse_util_1.sendSuccess.mockReturnValue(res);
            await productController.getAllProducts(req, res);
            expect(productService.getAllProducts).toHaveBeenCalled();
            expect(sendResponse_util_1.sendSuccess).toHaveBeenCalledWith(res, mockProducts, 200, 'Successfully fetched all products');
        });
    });
    describe('getProductById', () => {
        it('should get product by id and return success response', async () => {
            const mockProduct = { id: '1', name: 'Test Product', price: 100 };
            req.params = { productId: '1' };
            productService.getProductById.mockResolvedValue(mockProduct);
            sendResponse_util_1.sendSuccess.mockReturnValue(res);
            await productController.getProductById(req, res);
            expect(productService.getProductById).toHaveBeenCalledWith('1');
            expect(sendResponse_util_1.sendSuccess).toHaveBeenCalledWith(res, mockProduct, 200, 'Sucessfully fetched the product');
        });
    });
    describe('getRecommendedProducts', () => {
        it('should get recommended products and return success response', async () => {
            const mockRecommendations = [
                { id: '1', name: 'Recommended Product 1', price: 100 },
                { id: '2', name: 'Recommended Product 2', price: 200 },
            ];
            productService.getRecommendedProducts.mockResolvedValue(mockRecommendations);
            sendResponse_util_1.sendSuccess.mockReturnValue(res);
            await productController.getRecommendedProducts(req, res);
            expect(productService.getRecommendedProducts).toHaveBeenCalledWith('admin-id');
            expect(sendResponse_util_1.sendSuccess).toHaveBeenCalledWith(res, mockRecommendations, 200, 'Recommended products fetched');
        });
    });
});
