"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorSummary = exports.getLogsByEmail = exports.getLogsByUserId = void 0;
const prisma_util_1 = require("../utils/prisma.util");
const groq_utils_1 = require("../utils/groq.utils");
const getLogsByUserId = async (userId) => {
    return prisma_util_1.prisma.transaction_logs.findMany({
        where: { user_id: userId },
        orderBy: { created_at: 'desc' },
    });
};
exports.getLogsByUserId = getLogsByUserId;
const getLogsByEmail = async (email) => {
    return prisma_util_1.prisma.transaction_logs.findMany({
        where: { email },
        orderBy: { created_at: 'desc' },
    });
};
exports.getLogsByEmail = getLogsByEmail;
const getErrorSummary = async (userId, email) => {
    if (!userId && !email)
        throw new Error('Either userId or email is required');
    const logs = userId
        ? await prisma_util_1.prisma.transaction_logs.findMany({
            where: { user_id: userId, status_code: { gte: 400 } },
        })
        : await prisma_util_1.prisma.transaction_logs.findMany({
            where: { email, status_code: { gte: 400 } },
        });
    if (!logs.length)
        return 'No errors found for this user.';
    const errorMap = {};
    logs.forEach((log) => {
        const key = `${log.endpoint} -> ${log.error_message || 'Unknown error'}`;
        errorMap[key] = (errorMap[key] || 0) + 1;
    });
    const summary = await (0, groq_utils_1.generateErrorSummary)(errorMap);
    return summary;
};
exports.getErrorSummary = getErrorSummary;
//# sourceMappingURL=transactionLog.service.js.map