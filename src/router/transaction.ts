import { Router } from 'express';
import { transcationHandler } from '../controller/transaction.controller';
export const transactionRouter = Router();

transactionRouter.post('/get', transcationHandler);
