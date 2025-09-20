"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecommendedProducts = exports.getProductById = exports.getAllProducts = exports.deleteProduct = exports.updateProduct = exports.createProduct = void 0;
const prisma_util_1 = require("../utils/prisma.util");
const groq_utils_1 = require("../utils/groq.utils");
// C
const createProduct = async (adminId, data) => {
    const finalDescription = data.description || (await (0, groq_utils_1.generateProductDescription)(data));
    return prisma_util_1.prisma.investment_products.create({
        data: {
            ...data,
            description: finalDescription,
            created_by: adminId,
        },
    });
};
exports.createProduct = createProduct;
// U
const updateProduct = async (productId, data) => {
    if (!data || Object.keys(data).length === 0) {
        throw new Error('No update data provided');
    }
    const existing = await prisma_util_1.prisma.investment_products.findUnique({
        where: { id: productId },
    });
    const mergedData = { ...existing, ...data };
    const finalDescription = await (0, groq_utils_1.generateProductDescription)(mergedData);
    return prisma_util_1.prisma.investment_products.update({
        where: { id: productId },
        data: {
            ...data,
            description: finalDescription,
        },
    });
};
exports.updateProduct = updateProduct;
// D
const deleteProduct = async (productId) => {
    await prisma_util_1.prisma.investment_products.delete({
        where: { id: productId },
    });
};
exports.deleteProduct = deleteProduct;
// R
const getAllProducts = async () => {
    return prisma_util_1.prisma.investment_products.findMany({
        orderBy: { created_at: 'desc' },
    });
};
exports.getAllProducts = getAllProducts;
const getProductById = async (id) => {
    return prisma_util_1.prisma.investment_products.findUnique({
        where: { id },
    });
};
exports.getProductById = getProductById;
// AI
const getRecommendedProducts = async (userId) => {
    const user = await prisma_util_1.prisma.users.findUnique({
        where: { id: userId },
        select: { id: true, risk_appetite: true },
    });
    if (!user)
        throw new Error('User not found');
    const allProducts = await prisma_util_1.prisma.investment_products.findMany({
        orderBy: { annual_yield: 'desc' },
    });
    const products = allProducts.map((product) => ({
        name: product.name,
        investment_type: product.investment_type,
        tenure_months: product.tenure_months,
        annual_yield: product.annual_yield.toNumber(),
        risk_level: product.risk_level,
        min_investment: product.min_investment.toNumber(),
        max_investment: product.max_investment?.toNumber(),
        description: product.description || undefined,
    }));
    const recommendedProducts = await (0, groq_utils_1.generateProductRecommendations)(user.risk_appetite, products);
    return recommendedProducts;
};
exports.getRecommendedProducts = getRecommendedProducts;
//# sourceMappingURL=product.service.js.map