"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const plantController_1 = require("../../../controllers/data-controller/plantController");
const plantRouter = (0, express_1.Router)();
plantRouter.get('/', plantController_1.getAllPlants);
// Define a route to get plant data by ID
plantRouter.get('/:_id', plantController_1.getPlantById);
// TODO GET plant by filter params
exports.default = plantRouter;
