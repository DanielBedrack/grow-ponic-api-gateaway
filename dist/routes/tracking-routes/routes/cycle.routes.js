"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cycleController_1 = require("../../../controllers/tracking-controller/cycleController");
const cycleRouter = (0, express_1.Router)();
// Create a new cycle for a specific system
cycleRouter.post('/', cycleController_1.postCycle);
// Get all cycles for a specific system
cycleRouter.get('/', cycleController_1.getAllCyclesForSystem);
// Get a specific cycle by ID for a specific system
cycleRouter.get('/:cycleId', cycleController_1.getCycleById);
// Update a specific cycle by ID for a specific system
cycleRouter.put('/:cycleId', cycleController_1.updateCycle);
// Delete a specific cycle by ID for a specific system
cycleRouter.delete('/:cycleId', cycleController_1.deleteCycle);
exports.default = cycleRouter;
