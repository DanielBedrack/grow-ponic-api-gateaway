"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const plant_routes_1 = __importDefault(require("./routes/plant.routes"));
const disease_routes_1 = __importDefault(require("./routes/disease.routes"));
const systems_routes_1 = __importDefault(require("./routes/systems.routes"));
const seedData_routes_1 = __importDefault(require("./routes/seedData.routes"));
const dataRouter = (0, express_1.Router)();
dataRouter.use('/plants', plant_routes_1.default);
dataRouter.use('/diseases', disease_routes_1.default);
dataRouter.use('/systems', systems_routes_1.default);
dataRouter.use('/seed', seedData_routes_1.default);
exports.default = dataRouter;
