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
exports.getAllUsers = exports.login = exports.signUp = void 0;
const authService = __importStar(require("../services/auth.service"));
const sendResponse_util_1 = require("../utils/sendResponse.util");
const signUp = async (req, res) => {
    const userData = await authService.createUser(req.body);
    return (0, sendResponse_util_1.sendSuccess)(res, userData, 201, 'Successfully created User profile');
};
exports.signUp = signUp;
const login = async (req, res) => {
    const userData = await authService.loginUser(req.body);
    return (0, sendResponse_util_1.sendSuccess)(res, userData, 200, 'Successfully Logged In');
};
exports.login = login;
const getAllUsers = async (req, res) => {
    const currentUserId = req.user?.id;
    const users = await authService.getAllUsers(currentUserId);
    return (0, sendResponse_util_1.sendSuccess)(res, users, 200, 'Successfully fetched all users');
};
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=auth.controller.js.map