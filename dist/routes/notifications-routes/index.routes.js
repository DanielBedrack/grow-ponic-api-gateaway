"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notificationsController_1 = require("../../controllers/notification-controller/notificationsController");
const notificationRouter = (0, express_1.Router)();
notificationRouter.get('/seed', notificationsController_1.seedNotification);
notificationRouter.get('/send-tip-of-the-day', notificationsController_1.dailyNotification);
notificationRouter.get('/send-values-check', notificationsController_1.valuesCheckNotification);
notificationRouter.get('/send-end-season', notificationsController_1.seasonCheckNotification);
notificationRouter.get('/send-end-cycle', notificationsController_1.cycleCheckNotification);
exports.default = notificationRouter;
