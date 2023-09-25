"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const systemController_1 = require("../../../controllers/tracking-controller/systemController");
const systemRouter = (0, express_1.Router)();
// Route to create a system
systemRouter.post('/create-system', systemController_1.createSystem);
// Route to get all systems by user ID
systemRouter.get('/:_id', systemController_1.getSystemById);
systemRouter.get('', systemController_1.getAllSystems);
exports.default = systemRouter;
