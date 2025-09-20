"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_middleware_1 = require("../../src/middleware/errorHandler.middleware");
const sendResponse_util_1 = require("../../src/utils/sendResponse.util");
// Mock dependencies
jest.mock('../../src/utils/sendResponse.util');
describe('Error Handler Middleware', () => {
    let req;
    let res;
    let next;
    beforeEach(() => {
        req = {};
        res = {
            locals: {},
        };
        next = jest.fn();
        jest.clearAllMocks();
        // Mock console.error to avoid noise in test output
        jest.spyOn(console, 'error').mockImplementation(() => { });
    });
    afterEach(() => {
        jest.restoreAllMocks();
    });
    describe('errorHandler', () => {
        it('should handle error and send failure response', () => {
            const error = new Error('Test error message');
            sendResponse_util_1.sendFailure.mockReturnValue(res);
            (0, errorHandler_middleware_1.errorHandler)(error, req, res, next);
            expect(console.error).toHaveBeenCalledWith('[ERROR] Error: Test error message');
            expect(res.locals.errorMessage).toBe('Test error message');
            expect(sendResponse_util_1.sendFailure).toHaveBeenCalledWith(res, 'Test error message', 500);
        });
        it('should handle custom error types', () => {
            const customError = new TypeError('Type error occurred');
            customError.name = 'CustomError';
            sendResponse_util_1.sendFailure.mockReturnValue(res);
            (0, errorHandler_middleware_1.errorHandler)(customError, req, res, next);
            expect(console.error).toHaveBeenCalledWith('[ERROR] CustomError: Type error occurred');
            expect(res.locals.errorMessage).toBe('Type error occurred');
            expect(sendResponse_util_1.sendFailure).toHaveBeenCalledWith(res, 'Type error occurred', 500);
        });
    });
});
