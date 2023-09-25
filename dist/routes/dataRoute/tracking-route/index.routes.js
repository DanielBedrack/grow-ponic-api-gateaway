"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const system_routes_1 = __importDefault(require("./system.routes"));
const trackingRouter = (0, express_1.Router)();
trackingRouter.get('/systems', system_routes_1.default);
