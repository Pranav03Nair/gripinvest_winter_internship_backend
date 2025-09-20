import jwt from 'jsonwebtoken';
import { signToken } from '../../src/utils/jwt.util';

jest.mock('jsonwebtoken');

describe('signToken', () => {
  it('should call jwt.sign with payload and secret', () => {
    const payload = { userId: '123' };
    (jwt.sign as jest.Mock).mockReturnValue('signedToken');

    const token = signToken(payload);

    expect(jwt.sign).toHaveBeenCalledWith(
      payload,
      process.env.JWT_SECRET || 'fallback',
      { expiresIn: '1h' },
    );
    expect(token).toBe('signedToken');
  });
});
