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
exports.forcematureInvestment = exports.getPortfolioInsights = exports.cancelInvestment = exports.getMyInvestments = exports.createInvestment = void 0;
const investmentService = __importStar(require("../services/investment.service"));
const sendResponse_util_1 = require("../utils/sendResponse.util");
const createInvestment = async (req, res) => {
    const userId = req.user?.id;
    const investment = await investmentService.createInvestment(userId, req.body);
    return (0, sendResponse_util_1.sendSuccess)(res, investment, 201, 'Investment created successfully');
};
exports.createInvestment = createInvestment;
const getMyInvestments = async (req, res) => {
    const userId = req.user?.id;
    const investments = await investmentService.getAllUserInvestments(userId);
    return (0, sendResponse_util_1.sendSuccess)(res, investments, 200, 'User portfolio fetched');
};
exports.getMyInvestments = getMyInvestments;
const cancelInvestment = async (req, res) => {
    const userId = req.user?.id;
    const investmentId = req.params.id;
    await investmentService.cancelInvestment(userId, investmentId);
    return (0, sendResponse_util_1.sendSuccess)(res, null, 200, 'Investment cancelled');
};
exports.cancelInvestment = cancelInvestment;
const getPortfolioInsights = async (req, res) => {
    const userId = req.user?.id;
    const portfolio = await investmentService.getPortfolioInsights(userId);
    return (0, sendResponse_util_1.sendSuccess)(res, portfolio, 200, 'Portfolio insights fetched successfully');
};
exports.getPortfolioInsights = getPortfolioInsights;
//! Illegal
const forcematureInvestment = async (req, res) => {
    const userId = req.user?.id;
    const investmentId = req.params.id;
    const maturedCount = await investmentService.forcematureInvestment(userId, investmentId);
    return (0, sendResponse_util_1.sendSuccess)(res, { maturedCount }, 200, 'Investment Forcefully Matured');
};
exports.forcematureInvestment = forcematureInvestment;
//# sourceMappingURL=investment.controller.js.map