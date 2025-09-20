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
const express_1 = require("express");
const userController = __importStar(require("../controllers/user.controller"));
const user_validator_1 = require("../validators/user.validator");
const validateRequest_middleware_1 = require("../middleware/validateRequest.middleware");
const catchAsync_util_1 = require("../utils/catchAsync.util");
const authenticate_middleware_1 = require("../middleware/authenticate.middleware");
const isUser_middleware_1 = require("../middleware/isUser.middleware");
const router = (0, express_1.Router)();
// Apply authentication to all user routes
router.use(authenticate_middleware_1.authenticate);
// Get user profile - available to both user and admin roles
router.get('/profile', (0, catchAsync_util_1.catchAsync)(userController.getUserProfile));
// Get portfolio summary - only for users (excludes cancelled investments)
router.get('/portfolioSummary', isUser_middleware_1.isUser, (0, catchAsync_util_1.catchAsync)(userController.getPortfolioSummary));
// Add balance - only for users
router.post('/addBalance', isUser_middleware_1.isUser, (0, validateRequest_middleware_1.validateRequest)(user_validator_1.addBalanceSchema), (0, catchAsync_util_1.catchAsync)(userController.addBalance));
exports.default = router;
//# sourceMappingURL=user.route.js.map