"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionLogger = void 0;
const prisma_util_1 = require("../utils/prisma.util");
const transactionLogger = (req, res, next) => {
    const originalJson = res.json;
    const originalStatus = res.status;
    let responseBody = null;
    let statusCode = 200;
    let errorMessage = null;
    res.json = function (body) {
        responseBody = body;
        return originalJson.call(this, body);
    };
    res.status = function (code) {
        statusCode = code;
        return originalStatus.call(this, code);
    };
    res.on('finish', async () => {
        try {
            let userId = undefined;
            let userEmail = undefined;
            if (req.user) {
                userId = req.user.id;
                userEmail = req.user.email || '';
            }
            else if (req.originalUrl.includes('/auth/')) {
                if (req.body?.email) {
                    userEmail = req.body.email;
                }
                if (responseBody?.success && responseBody?.data?.user) {
                    userId = responseBody.data.user.id;
                    userEmail = responseBody.data.user.email || userEmail;
                }
            }
            if (statusCode >= 400) {
                if (res.locals.errorMessage) {
                    errorMessage = res.locals.errorMessage;
                }
                else if (responseBody?.error) {
                    errorMessage = responseBody.error;
                }
                else if (responseBody?.message && !responseBody?.success) {
                    errorMessage = responseBody.message;
                }
            }
            await prisma_util_1.prisma.transaction_logs.create({
                data: {
                    user_id: userId || null,
                    email: userEmail || null,
                    endpoint: req.originalUrl,
                    http_method: req.method,
                    status_code: statusCode,
                    error_message: errorMessage,
                },
            });
        }
        catch (err) {
            console.error('[TransactionLogger] Failed to log transaction:', err);
        }
    });
    next();
};
exports.transactionLogger = transactionLogger;
//# sourceMappingURL=transactionLog.middlerware.js.map