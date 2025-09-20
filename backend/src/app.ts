import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler.middleware';
import { transactionLogger } from './middleware/transactionLog.middlerware';

import authRoutes from './routes/auth.route';
import userRoutes from './routes/user.route';
import productRoutes from './routes/product.route';
import investmentRoutes from './routes/investment.route';
import transactionLogRoutes from './routes/transactionLog.route';
import healthRoutes from './routes/health.route';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(transactionLogger);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/investments', investmentRoutes);
app.use('/api/logs', transactionLogRoutes);

app.use('/', healthRoutes);

// Global Error Middleware
app.use(errorHandler);

export default app;
