"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAsync = void 0;
const catchAsync = (func) => (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch(next);
};
exports.catchAsync = catchAsync;
//# sourceMappingURL=catchAsync.util.js.map