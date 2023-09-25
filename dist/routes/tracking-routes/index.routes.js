"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const system_routes_1 = __importDefault(require("./routes/system.routes"));
const cycle_routes_1 = __importDefault(require("./routes/cycle.routes"));
const seedTracking_routes_1 = __importDefault(require("./routes/seedTracking.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const trackingRouter = (0, express_1.Router)();
trackingRouter.use('/systems', system_routes_1.default);
trackingRouter.use('/cycles', cycle_routes_1.default);
trackingRouter.use('/seed', seedTracking_routes_1.default);
trackingRouter.use('/users', user_routes_1.default);
exports.default = trackingRouter;
