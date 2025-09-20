import { Router } from 'express';
import * as investmentController from '../controllers/investment.controller';
import { catchAsync } from '../utils/catchAsync.util';
import { authenticate } from '../middleware/authenticate.middleware';
import { validateRequest } from '../middleware/validateRequest.middleware';
import { investmentSchema } from '../validators/investment.validator';
import { isUser } from '../middleware/isUser.middleware';

const router = Router();

router.use(authenticate, isUser);

router.post(
  '/create',
  validateRequest(investmentSchema),
  catchAsync(investmentController.createInvestment),
);

router.get('/', catchAsync(investmentController.getMyInvestments));

router.get(
  '/portfolioInsights',
  authenticate,
  catchAsync(investmentController.getPortfolioInsights),
);

router.patch('/:id/cancel', catchAsync(investmentController.cancelInvestment));

//! Illegal
router.post(
  '/:id/forcemature',
  catchAsync(investmentController.forcematureInvestment),
);

export default router;
