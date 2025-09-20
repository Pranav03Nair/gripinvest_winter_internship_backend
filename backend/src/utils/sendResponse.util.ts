import { Response } from 'express';
import { ApiResponse } from '../types/api.resonse.type';

export function sendSuccess<T>(
  res: Response,
  data: T,
  status = 200,
  message?: string,
) {
  const payload: ApiResponse<T> = { success: true, data };
  if (message) payload.message = message;
  return res.status(status).json(payload);
}

export function sendFailure(
  res: Response,
  error: string,
  status = 400,
  message?: string,
) {
  const payload: ApiResponse = { success: false, error };
  if (message) payload.message = message;
  return res.status(status).json(payload);
}
