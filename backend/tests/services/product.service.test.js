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
// Mock the groq utils before importing anything that uses it
jest.mock('../../src/utils/groq.utils', () => ({
    generateProductDescription: jest.fn(),
    generateProductRecommendations: jest.fn(),
}));
// Mock prisma
jest.mock('../../src/utils/prisma.util', () => ({
    prisma: {
        investment_products: {
            create: jest.fn(),
            findUnique: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            findMany: jest.fn(),
        },
        users: {
            findUnique: jest.fn(),
        },
    },
}));
const productService = __importStar(require("../../src/services/product.service"));
const prisma_util_1 = require("../../src/utils/prisma.util");
const groq_utils_1 = require("../../src/utils/groq.utils");
describe('Product Service', () => {
    const mockPrisma = prisma_util_1.prisma;
    const mockGenerateProductDescription = groq_utils_1.generateProductDescription;
    const mockGenerateProductRecommendations = groq_utils_1.generateProductRecommendations;
    beforeEach(() => {
        jest.clearAllMocks();
    });
    describe('createProduct', () => {
        const productData = {
            name: 'Test Product',
            investment_type: 'bond',
            tenure_months: 12,
            annual_yield: 8.5,
            risk_level: 'moderate',
            min_investment: 1000,
            max_investment: 100000,
        };
        it('should create product with provided description', async () => {
            const productWithDescription = {
                ...productData,
                description: 'Custom description',
            };
            const mockCreatedProduct = { id: '1', ...productWithDescription };
            mockPrisma.investment_products.create.mockResolvedValue(mockCreatedProduct);
            const result = await productService.createProduct('admin-id', productWithDescription);
            expect(mockPrisma.investment_products.create).toHaveBeenCalledWith({
                data: {
                    ...productWithDescription,
                    created_by: 'admin-id',
                },
            });
            expect(mockGenerateProductDescription).not.toHaveBeenCalled();
            expect(result).toEqual(mockCreatedProduct);
        });
        it('should create product with generated description when not provided', async () => {
            const generatedDescription = 'AI generated description';
            const mockCreatedProduct = {
                id: '1',
                ...productData,
                description: generatedDescription,
            };
            mockGenerateProductDescription.mockResolvedValue(generatedDescription);
            mockPrisma.investment_products.create.mockResolvedValue(mockCreatedProduct);
            const result = await productService.createProduct('admin-id', productData);
            expect(mockGenerateProductDescription).toHaveBeenCalledWith(productData);
            expect(mockPrisma.investment_products.create).toHaveBeenCalledWith({
                data: {
                    ...productData,
                    description: generatedDescription,
                    created_by: 'admin-id',
                },
            });
            expect(result).toEqual(mockCreatedProduct);
        });
    });
    describe('updateProduct', () => {
        const updateData = {
            name: 'Updated Product',
            investment_type: 'mf',
            tenure_months: 24,
            annual_yield: 9.0,
            risk_level: 'high',
            min_investment: 2000,
        };
        it('should update product successfully', async () => {
            const existingProduct = {
                id: '1',
                name: 'Old Product',
                investment_type: 'bond',
                tenure_months: 12,
                annual_yield: 8.5,
                risk_level: 'moderate',
                min_investment: 1000,
            };
            const generatedDescription = 'Updated description';
            const updatedProduct = { ...existingProduct, ...updateData };
            mockPrisma.investment_products.findUnique.mockResolvedValue(existingProduct);
            mockGenerateProductDescription.mockResolvedValue(generatedDescription);
            mockPrisma.investment_products.update.mockResolvedValue(updatedProduct);
            const result = await productService.updateProduct('1', updateData);
            expect(mockPrisma.investment_products.findUnique).toHaveBeenCalledWith({
                where: { id: '1' },
            });
            expect(mockGenerateProductDescription).toHaveBeenCalledWith({
                ...existingProduct,
                ...updateData,
            });
            expect(mockPrisma.investment_products.update).toHaveBeenCalledWith({
                where: { id: '1' },
                data: {
                    ...updateData,
                    description: generatedDescription,
                },
            });
            expect(result).toEqual(updatedProduct);
        });
        it('should throw error when no update data provided', async () => {
            await expect(productService.updateProduct('1', {})).rejects.toThrow('No update data provided');
            expect(mockPrisma.investment_products.findUnique).not.toHaveBeenCalled();
        });
    });
    describe('deleteProduct', () => {
        it('should delete product successfully', async () => {
            mockPrisma.investment_products.delete.mockResolvedValue({});
            await productService.deleteProduct('1');
            expect(mockPrisma.investment_products.delete).toHaveBeenCalledWith({
                where: { id: '1' },
            });
        });
    });
    describe('getAllProducts', () => {
        it('should get all products ordered by created_at desc', async () => {
            const mockProducts = [
                { id: '1', name: 'Product 1', created_at: new Date() },
                { id: '2', name: 'Product 2', created_at: new Date() },
            ];
            mockPrisma.investment_products.findMany.mockResolvedValue(mockProducts);
            const result = await productService.getAllProducts();
            expect(mockPrisma.investment_products.findMany).toHaveBeenCalledWith({
                orderBy: { created_at: 'desc' },
            });
            expect(result).toEqual(mockProducts);
        });
    });
    describe('getProductById', () => {
        it('should get product by id', async () => {
            const mockProduct = { id: '1', name: 'Test Product' };
            mockPrisma.investment_products.findUnique.mockResolvedValue(mockProduct);
            const result = await productService.getProductById('1');
            expect(mockPrisma.investment_products.findUnique).toHaveBeenCalledWith({
                where: { id: '1' },
            });
            expect(result).toEqual(mockProduct);
        });
    });
    describe('getRecommendedProducts', () => {
        it('should get recommended products for user', async () => {
            const mockUser = { id: 'user-1', risk_appetite: 'moderate' };
            const mockProducts = [
                {
                    id: '1',
                    name: 'Product 1',
                    investment_type: 'bond',
                    tenure_months: 12,
                    annual_yield: { toNumber: () => 8.5 },
                    risk_level: 'moderate',
                    min_investment: { toNumber: () => 1000 },
                    max_investment: { toNumber: () => 100000 },
                    description: 'Test product',
                },
            ];
            const mockRecommendations = [{ name: 'Recommended Product 1' }];
            mockPrisma.users.findUnique.mockResolvedValue(mockUser);
            mockPrisma.investment_products.findMany.mockResolvedValue(mockProducts);
            mockGenerateProductRecommendations.mockResolvedValue(mockRecommendations);
            const result = await productService.getRecommendedProducts('user-1');
            expect(mockPrisma.users.findUnique).toHaveBeenCalledWith({
                where: { id: 'user-1' },
                select: { id: true, risk_appetite: true },
            });
            expect(mockPrisma.investment_products.findMany).toHaveBeenCalledWith({
                orderBy: { annual_yield: 'desc' },
            });
            expect(mockGenerateProductRecommendations).toHaveBeenCalledWith('moderate', expect.arrayContaining([
                expect.objectContaining({
                    name: 'Product 1',
                    investment_type: 'bond',
                    annual_yield: 8.5,
                }),
            ]));
            expect(result).toEqual(mockRecommendations);
        });
        it('should throw error when user not found', async () => {
            mockPrisma.users.findUnique.mockResolvedValue(null);
            await expect(productService.getRecommendedProducts('non-existent')).rejects.toThrow('User not found');
            expect(mockPrisma.investment_products.findMany).not.toHaveBeenCalled();
        });
    });
});
