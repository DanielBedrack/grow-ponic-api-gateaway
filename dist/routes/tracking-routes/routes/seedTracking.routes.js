"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const seedController_1 = require("../../../controllers/tracking-controller/seedController");
const seedRouter = (0, express_1.Router)();
seedRouter.get('/', seedController_1.seedTracking);
exports.default = seedRouter;
