import { Router } from 'express';
import { cycleCheckNotification, dailyNotification, seasonCheckNotification, seedNotification, valuesCheckNotification } from '../../controllers/notification-controller/notificationsController';

const notificationRouter = Router();

notificationRouter.get('/seed', seedNotification);
notificationRouter.get('/send-tip-of-the-day', dailyNotification);
notificationRouter.get('/send-values-check', valuesCheckNotification);
notificationRouter.get('/send-end-season', seasonCheckNotification);
notificationRouter.get('/send-end-cycle', cycleCheckNotification);

export default notificationRouter;
