"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const errorHandler_middleware_1 = require("./middleware/errorHandler.middleware");
const transactionLog_middlerware_1 = require("./middleware/transactionLog.middlerware");
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const product_route_1 = __importDefault(require("./routes/product.route"));
const investment_route_1 = __importDefault(require("./routes/investment.route"));
const transactionLog_route_1 = __importDefault(require("./routes/transactionLog.route"));
const health_route_1 = __importDefault(require("./routes/health.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(transactionLog_middlerware_1.transactionLogger);
// Routes
app.use('/api/auth', auth_route_1.default);
app.use('/api/users', user_route_1.default);
app.use('/api/products', product_route_1.default);
app.use('/api/investments', investment_route_1.default);
app.use('/api/logs', transactionLog_route_1.default);
app.use('/', health_route_1.default);
// Global Error Middleware
app.use(errorHandler_middleware_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map