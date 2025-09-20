"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBalanceSchema = void 0;
const zod_1 = require("zod");
exports.addBalanceSchema = zod_1.z.object({
    amount: zod_1.z
        .number()
        .positive('Amount must be positive')
        .max(100000, 'Amount cannot exceed ₹100,000')
        .min(1, 'Amount must be at least ₹1'),
});
//# sourceMappingURL=user.validator.js.map