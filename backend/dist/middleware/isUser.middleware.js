"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUser = void 0;
const sendResponse_util_1 = require("../utils/sendResponse.util");
const isUser = (req, res, next) => {
    const user = req.user;
    if (!user) {
        return (0, sendResponse_util_1.sendFailure)(res, 'Unauthorized: No user found', 401);
    }
    if (user.role !== 'user') {
        return (0, sendResponse_util_1.sendFailure)(res, 'Forbidden: Users only', 403);
    }
    next();
};
exports.isUser = isUser;
//# sourceMappingURL=isUser.middleware.js.map