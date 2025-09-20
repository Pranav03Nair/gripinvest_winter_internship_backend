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
exports.getPortfolioSummary = exports.getUserProfile = exports.addBalance = void 0;
const userService = __importStar(require("../services/user.service"));
const sendResponse_util_1 = require("../utils/sendResponse.util");
const addBalance = async (req, res) => {
    const userId = req.user?.id;
    if (!userId) {
        throw new Error('User ID not found in request');
    }
    const updatedUser = await userService.addBalance(userId, req.body);
    return (0, sendResponse_util_1.sendSuccess)(res, updatedUser, 200, 'Balance added successfully');
};
exports.addBalance = addBalance;
const getUserProfile = async (req, res) => {
    const userId = req.user?.id;
    if (!userId) {
        throw new Error('User ID not found in request');
    }
    const userProfile = await userService.getUserProfile(userId);
    return (0, sendResponse_util_1.sendSuccess)(res, userProfile, 200, 'User profile fetched successfully');
};
exports.getUserProfile = getUserProfile;
const getPortfolioSummary = async (req, res) => {
    const userId = req.user?.id;
    if (!userId) {
        throw new Error('User ID not found in request');
    }
    const portfolioSummary = await userService.getPortfolioSummary(userId);
    return (0, sendResponse_util_1.sendSuccess)(res, portfolioSummary, 200, 'Portfolio summary fetched successfully');
};
exports.getPortfolioSummary = getPortfolioSummary;
//# sourceMappingURL=user.controller.js.map