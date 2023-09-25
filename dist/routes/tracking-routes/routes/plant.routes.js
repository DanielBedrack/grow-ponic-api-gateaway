"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const plantController_1 = require("../../../controllers/tracking-controller/plantController");
const plantRouter = express_1.default.Router({ mergeParams: true });
// Create a new plant for a specific cycle
plantRouter.post('/', plantController_1.createPlant);
// Get all plants for a specific cycle
plantRouter.get('/', plantController_1.getAllPlantsForCycle);
// Get a specific plant by ID for a specific cycle
plantRouter.get('/:plantId', plantController_1.getPlantById);
// Update a specific plant by ID for a specific cycle
plantRouter.put('/:plantId', plantController_1.updatePlant);
// Delete a specific plant by ID for a specific cycle
plantRouter.delete('/:plantId', plantController_1.deletePlant);
exports.default = plantRouter;
