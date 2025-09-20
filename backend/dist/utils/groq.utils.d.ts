import { productType } from '../validators/product.validator';
import { investments, investment_products } from '../../generated/prisma';
type InvestmentWithProducts = investments & {
    investment_products: investment_products;
};
export declare function generateProductDescription(data: productType): Promise<string>;
export declare function generateProductRecommendations(riskAppetite: string, products: productType[]): Promise<productType[]>;
export declare function generatePortfolioInsights(investments: InvestmentWithProducts[], riskDistribution: Record<string, number>, totalInvested: number, expectedReturns: number): Promise<string>;
export declare function generateErrorSummary(errorMap: Record<string, number>): Promise<string>;
export {};
//# sourceMappingURL=groq.utils.d.ts.map