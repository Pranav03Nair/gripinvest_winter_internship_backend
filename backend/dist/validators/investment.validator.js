"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.investmentSchema = void 0;
const zod_1 = require("zod");
exports.investmentSchema = zod_1.z.object({
    product_id: zod_1.z.uuid('Product Id is UUID'),
    amount: zod_1.z.number().min(1000, 'Minimum investment is ₹1000'),
});
//# sourceMappingURL=investment.validator.js.map