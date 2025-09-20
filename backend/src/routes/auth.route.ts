import { Router } from 'express';
import * as authController from '../controllers/auth.controller';
import { loginSchema, signupSchema } from '../validators/auth.validator';
import { validateRequest } from '../middleware/validateRequest.middleware';
import { catchAsync } from '../utils/catchAsync.util';
import { authenticate } from '../middleware/authenticate.middleware';
import { isAdmin } from '../middleware/isAdmin.middleware';

const router = Router();

router.post(
  '/signup',
  validateRequest(signupSchema),
  catchAsync(authController.signUp),
);

router.post(
  '/login',
  validateRequest(loginSchema),
  catchAsync(authController.login),
);

router.get(
  '/users',
  authenticate,
  isAdmin,
  catchAsync(authController.getAllUsers),
);

export default router;
