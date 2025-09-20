import { prisma } from '../utils/prisma.util';
import {
  generateProductDescription,
  generateProductRecommendations,
} from '../utils/groq.utils';
import { productType } from '../validators/product.validator';

// C
export const createProduct = async (adminId: string, data: productType) => {
  const finalDescription =
    data.description || (await generateProductDescription(data));
  return prisma.investment_products.create({
    data: {
      ...data,
      description: finalDescription,
      created_by: adminId,
    },
  });
};

// U
export const updateProduct = async (productId: string, data: productType) => {
  if (!data || Object.keys(data).length === 0) {
    throw new Error('No update data provided');
  }

  const existing = await prisma.investment_products.findUnique({
    where: { id: productId },
  });

  const mergedData = { ...existing, ...data } as productType;
  const finalDescription = await generateProductDescription(mergedData);

  return prisma.investment_products.update({
    where: { id: productId },
    data: {
      ...data,
      description: finalDescription,
    },
  });
};

// D
export const deleteProduct = async (productId: string) => {
  await prisma.investment_products.delete({
    where: { id: productId },
  });
};

// R
export const getAllProducts = async () => {
  return prisma.investment_products.findMany({
    orderBy: { created_at: 'desc' },
  });
};
export const getProductById = async (id: string) => {
  return prisma.investment_products.findUnique({
    where: { id },
  });
};

// AI
export const getRecommendedProducts = async (userId: string) => {
  const user = await prisma.users.findUnique({
    where: { id: userId },
    select: { id: true, risk_appetite: true },
  });

  if (!user) throw new Error('User not found');

  const allProducts = await prisma.investment_products.findMany({
    orderBy: { annual_yield: 'desc' },
  });

  const products: productType[] = allProducts.map((product) => ({
    name: product.name,
    investment_type: product.investment_type,
    tenure_months: product.tenure_months,
    annual_yield: product.annual_yield.toNumber(),
    risk_level: product.risk_level,
    min_investment: product.min_investment.toNumber(),
    max_investment: product.max_investment?.toNumber(),
    description: product.description || undefined,
  }));

  const recommendedProducts = await generateProductRecommendations(
    user.risk_appetite,
    products,
  );

  return recommendedProducts;
};
