import { catchAsync } from '../../src/utils/catchAsync.util';

describe('catchAsync', () => {
  it('should call the handler successfully', async () => {
    const handler = jest.fn((req, res, next) => res.send('ok'));
    const req: any = {};
    const res: any = { send: jest.fn() };
    const next = jest.fn();

    await catchAsync(handler)(req, res, next);

    expect(handler).toHaveBeenCalled();
    expect(res.send).toHaveBeenCalledWith('ok');
    expect(next).not.toHaveBeenCalled();
  });

  it('should catch errors and call next', async () => {
    const error = new Error('fail');
    const handler = jest.fn(() => Promise.reject(error));
    const req: any = {};
    const res: any = {};
    const next = jest.fn();

    await catchAsync(handler)(req, res, next);

    expect(next).toHaveBeenCalledWith(error);
  });
});
