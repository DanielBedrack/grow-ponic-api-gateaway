"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const systemController_1 = require("../../../controllers/tracking-controller/systemController");
const systemRouter = (0, express_1.Router)();
// Create a new system
systemRouter.post('/create-system', systemController_1.createSystem);
// Get all systems
systemRouter.get('/systems', systemController_1.getAllSystems);
// Get a specific system by ID
systemRouter.get('/:systemId', systemController_1.getSystemById);
// Update a specific system by ID
systemRouter.put('/:systemId', systemController_1.updateSystem);
// Delete a specific system by ID
systemRouter.delete('/:systemId', systemController_1.deleteSystem);
exports.default = systemRouter;
