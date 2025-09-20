"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorSummary = exports.getLogs = void 0;
const logService = __importStar(require("../services/transactionLog.service"));
const sendResponse_util_1 = require("../utils/sendResponse.util");
const getLogs = async (req, res) => {
    const { userId, email } = req.body;
    if (!userId && !email) {
        return (0, sendResponse_util_1.sendFailure)(res, 'Either userId or email is required', 400);
    }
    let logs;
    if (userId)
        logs = await logService.getLogsByUserId(userId);
    else
        logs = await logService.getLogsByEmail(email);
    return (0, sendResponse_util_1.sendSuccess)(res, logs);
};
exports.getLogs = getLogs;
const getErrorSummary = async (req, res) => {
    const { userId, email } = req.body;
    try {
        const summary = await logService.getErrorSummary(userId, email);
        return (0, sendResponse_util_1.sendSuccess)(res, { summary }, 200, 'Error summary fetched');
    }
    catch (err) {
        return (0, sendResponse_util_1.sendFailure)(res, err.message, 400);
    }
};
exports.getErrorSummary = getErrorSummary;
//# sourceMappingURL=transactionLog.controller.js.map