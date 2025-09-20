"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const zod_1 = require("zod");
const sendResponse_util_1 = require("../utils/sendResponse.util");
const validateRequest = (type) => {
    return (req, res, next) => {
        const result = type.safeParse(req.body);
        if (!result.success) {
            console.log(result.error);
            const errorMessages = zod_1.z.treeifyError(result.error);
            return (0, sendResponse_util_1.sendFailure)(res, 'Invalid Input', 422, JSON.stringify(errorMessages));
        }
        req.body = result.data;
        next();
    };
};
exports.validateRequest = validateRequest;
//# sourceMappingURL=validateRequest.middleware.js.map