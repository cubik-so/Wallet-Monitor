import { Router } from 'express';
import {
  createWebhookRouter,
  updateWebhookRouter,
} from '../controller/webhook.controller';
export const webhookRouter = Router();

webhookRouter.post('/create', createWebhookRouter);
webhookRouter.post('/edit', updateWebhookRouter);
