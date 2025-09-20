"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSuccess = sendSuccess;
exports.sendFailure = sendFailure;
function sendSuccess(res, data, status = 200, message) {
    const payload = { success: true, data };
    if (message)
        payload.message = message;
    return res.status(status).json(payload);
}
function sendFailure(res, error, status = 400, message) {
    const payload = { success: false, error };
    if (message)
        payload.message = message;
    return res.status(status).json(payload);
}
//# sourceMappingURL=sendResponse.util.js.map