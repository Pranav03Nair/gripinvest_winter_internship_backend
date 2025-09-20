"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheck = void 0;
const prisma_util_1 = require("../utils/prisma.util");
const healthCheck = async (req, res) => {
    try {
        await prisma_util_1.prisma.$queryRaw `SELECT 1`;
        return res.status(200).json({
            service: 'UP',
            database: 'CONNECTED',
        });
    }
    catch (error) {
        return res.status(500).json({
            service: 'UP',
            database: 'ERROR',
            error: error.message,
        });
    }
};
exports.healthCheck = healthCheck;
//# sourceMappingURL=health.controller.js.map