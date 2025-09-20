import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { addBalanceSchema } from '../validators/user.validator';
import { validateRequest } from '../middleware/validateRequest.middleware';
import { catchAsync } from '../utils/catchAsync.util';
import { authenticate } from '../middleware/authenticate.middleware';
import { isUser } from '../middleware/isUser.middleware';

const router = Router();

router.use(authenticate);

router.get('/profile', catchAsync(userController.getUserProfile));

router.get(
  '/portfolioSummary',
  isUser,
  catchAsync(userController.getPortfolioSummary),
);

router.post(
  '/addBalance',
  isUser,
  validateRequest(addBalanceSchema),
  catchAsync(userController.addBalance),
);

export default router;
