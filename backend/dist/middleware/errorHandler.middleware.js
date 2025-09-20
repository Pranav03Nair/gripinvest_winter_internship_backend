"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const sendResponse_util_1 = require("../utils/sendResponse.util");
const errorHandler = (err, _req, res, _next) => {
    console.error(`[ERROR] ${err.name}: ${err.message}`);
    res.locals.errorMessage = err.message;
    return (0, sendResponse_util_1.sendFailure)(res, err.message, 500);
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.middleware.js.map