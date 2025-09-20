"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
const sendResponse_util_1 = require("../utils/sendResponse.util");
const isAdmin = (req, res, next) => {
    const user = req.user;
    if (!user) {
        return (0, sendResponse_util_1.sendFailure)(res, 'Unauthorized: No user found', 401);
    }
    if (user.role !== 'admin') {
        return (0, sendResponse_util_1.sendFailure)(res, 'Forbidden: Admins only', 403);
    }
    next();
};
exports.isAdmin = isAdmin;
//# sourceMappingURL=isAdmin.middleware.js.map