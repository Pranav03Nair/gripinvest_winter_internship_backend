"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductSchema = exports.productSchema = void 0;
const zod_1 = require("zod");
exports.productSchema = zod_1.z.object({
    name: zod_1.z.string().min(3),
    investment_type: zod_1.z.enum(['bond', 'fd', 'mf', 'etf', 'other']),
    tenure_months: zod_1.z.number().min(1),
    annual_yield: zod_1.z.number().min(0),
    risk_level: zod_1.z.enum(['low', 'moderate', 'high']),
    min_investment: zod_1.z.number().min(0),
    max_investment: zod_1.z.number().min(0).optional(),
    description: zod_1.z.string().optional(),
});
exports.updateProductSchema = exports.productSchema.partial();
//# sourceMappingURL=product.validator.js.map