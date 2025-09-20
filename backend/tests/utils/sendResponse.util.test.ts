import { sendSuccess, sendFailure } from '../../src/utils/sendResponse.util';

describe('sendResponse utilities', () => {
  let res: any;

  beforeEach(() => {
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  });

  it('sendSuccess sends correct response', () => {
    const data = { foo: 'bar' };
    sendSuccess(res, data, 201, 'OK');

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      data,
      message: 'OK',
    });
  });

  it('sendFailure sends correct response', () => {
    sendFailure(res, 'Error', 400, 'Bad');

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: 'Error',
      message: 'Bad',
    });
  });
});
