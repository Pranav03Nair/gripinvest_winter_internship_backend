"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse_util_1 = require("../../src/utils/sendResponse.util");
describe('sendResponse utilities', () => {
    let res;
    beforeEach(() => {
        res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    });
    it('sendSuccess sends correct response', () => {
        const data = { foo: 'bar' };
        (0, sendResponse_util_1.sendSuccess)(res, data, 201, 'OK');
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            success: true,
            data,
            message: 'OK',
        });
    });
    it('sendFailure sends correct response', () => {
        (0, sendResponse_util_1.sendFailure)(res, 'Error', 400, 'Bad');
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({
            success: false,
            error: 'Error',
            message: 'Bad',
        });
    });
});
