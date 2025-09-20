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
const investmentController = __importStar(require("../controllers/investment.controller"));
const catchAsync_util_1 = require("../utils/catchAsync.util");
const authenticate_middleware_1 = require("../middleware/authenticate.middleware");
const validateRequest_middleware_1 = require("../middleware/validateRequest.middleware");
const investment_validator_1 = require("../validators/investment.validator");
const isUser_middleware_1 = require("../middleware/isUser.middleware");
const router = (0, express_1.Router)();
router.use(authenticate_middleware_1.authenticate, isUser_middleware_1.isUser);
router.post('/create', (0, validateRequest_middleware_1.validateRequest)(investment_validator_1.investmentSchema), (0, catchAsync_util_1.catchAsync)(investmentController.createInvestment));
router.get('/', (0, catchAsync_util_1.catchAsync)(investmentController.getMyInvestments));
router.get('/portfolioInsights', authenticate_middleware_1.authenticate, (0, catchAsync_util_1.catchAsync)(investmentController.getPortfolioInsights));
router.patch('/:id/cancel', (0, catchAsync_util_1.catchAsync)(investmentController.cancelInvestment));
//! Illegal
router.post('/:id/forcemature', (0, catchAsync_util_1.catchAsync)(investmentController.forcematureInvestment));
exports.default = router;
//# sourceMappingURL=investment.route.js.map