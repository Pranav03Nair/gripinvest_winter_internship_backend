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
const authController = __importStar(require("../controllers/auth.controller"));
const auth_validator_1 = require("../validators/auth.validator");
const validateRequest_middleware_1 = require("../middleware/validateRequest.middleware");
const catchAsync_util_1 = require("../utils/catchAsync.util");
const authenticate_middleware_1 = require("../middleware/authenticate.middleware");
const isAdmin_middleware_1 = require("../middleware/isAdmin.middleware");
const router = (0, express_1.Router)();
router.post('/signup', (0, validateRequest_middleware_1.validateRequest)(auth_validator_1.signupSchema), (0, catchAsync_util_1.catchAsync)(authController.signUp));
router.post('/login', (0, validateRequest_middleware_1.validateRequest)(auth_validator_1.loginSchema), (0, catchAsync_util_1.catchAsync)(authController.login));
// Admin route to get all users
router.get('/users', authenticate_middleware_1.authenticate, isAdmin_middleware_1.isAdmin, (0, catchAsync_util_1.catchAsync)(authController.getAllUsers));
exports.default = router;
//# sourceMappingURL=auth.route.js.map