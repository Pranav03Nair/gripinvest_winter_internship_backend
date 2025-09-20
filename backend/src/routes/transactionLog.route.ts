import { Router } from 'express';
import { catchAsync } from '../utils/catchAsync.util';
import * as logController from '../controllers/transactionLog.controller';
import { authenticate } from '../middleware/authenticate.middleware';
import { validateRequest } from '../middleware/validateRequest.middleware';
import { logFetchSchema } from '../validators/transactionLog.validator';
import { isAdmin } from '../middleware/isAdmin.middleware';

const router = Router();

router.post(
  '/',
  authenticate,
  validateRequest(logFetchSchema),
  catchAsync(logController.getLogs),
);

router.post(
  '/summary',
  authenticate,
  isAdmin,
  validateRequest(logFetchSchema),
  catchAsync(logController.getErrorSummary),
);

export default router;
