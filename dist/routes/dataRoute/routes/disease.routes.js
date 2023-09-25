"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const diseasesController_1 = require("../../../controllers/data-controller/diseasesController");
const diseaseRouter = (0, express_1.Router)();
diseaseRouter.get('/', diseasesController_1.getAllDiseases);
// Define a route to get plant data by ID
diseaseRouter.get('/diseases/:_id', diseasesController_1.getDiseaseById);
exports.default = diseaseRouter;
