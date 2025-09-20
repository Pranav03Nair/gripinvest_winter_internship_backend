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
exports.getRecommendedProducts = exports.getProductById = exports.getAllProducts = exports.deleteProduct = exports.updateProduct = exports.createProduct = void 0;
const sendResponse_util_1 = require("../utils/sendResponse.util");
const productService = __importStar(require("../services/product.service"));
const createProduct = async (req, res) => {
    const adminId = req.user?.id;
    const newProduct = await productService.createProduct(adminId, req.body);
    return (0, sendResponse_util_1.sendSuccess)(res, newProduct, 201, 'Successfully created new Product');
};
exports.createProduct = createProduct;
const updateProduct = async (req, res) => {
    const productId = req.params.productId;
    const updatedProduct = await productService.updateProduct(productId, req.body);
    return (0, sendResponse_util_1.sendSuccess)(res, updatedProduct, 200, 'Successfully updated product');
};
exports.updateProduct = updateProduct;
const deleteProduct = async (req, res) => {
    const productId = req.params.productId;
    await productService.deleteProduct(productId);
    return (0, sendResponse_util_1.sendSuccess)(res, null, 200, 'Succefully deleted product');
};
exports.deleteProduct = deleteProduct;
const getAllProducts = async (_req, res) => {
    const products = await productService.getAllProducts();
    return (0, sendResponse_util_1.sendSuccess)(res, products, 200, 'Successfully fetched all products');
};
exports.getAllProducts = getAllProducts;
const getProductById = async (req, res) => {
    const productId = req.params.productId;
    const product = await productService.getProductById(productId);
    return (0, sendResponse_util_1.sendSuccess)(res, product, 200, 'Sucessfully fetched the product');
};
exports.getProductById = getProductById;
const getRecommendedProducts = async (req, res) => {
    const userId = req.user?.id;
    const recommendations = await productService.getRecommendedProducts(userId);
    return (0, sendResponse_util_1.sendSuccess)(res, recommendations, 200, 'Recommended products fetched');
};
exports.getRecommendedProducts = getRecommendedProducts;
//# sourceMappingURL=product.controller.js.map