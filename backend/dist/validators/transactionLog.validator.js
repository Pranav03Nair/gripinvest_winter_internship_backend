"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logFetchSchema = void 0;
const zod_1 = require("zod");
exports.logFetchSchema = zod_1.z
    .object({
    userId: zod_1.z.uuid().optional(),
    email: zod_1.z.email().optional(),
})
    .refine((data) => data.userId || data.email, {
    message: 'Either userId or email is required',
});
//# sourceMappingURL=transactionLog.validator.js.map