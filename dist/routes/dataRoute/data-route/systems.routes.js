"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const systemRouter = (0, express_1.Router)();
// Route to create a system
systemRouter.post('/create-system', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Forward the request to the tracking service
        const response = yield axios_1.default.post('http://localhost:8080/create-system', req.body);
        if (response.status === 200) {
            res.status(200).json(response.data);
        }
        else {
            res
                .status(response.status)
                .json({ error: 'Unexpected status code from the tracking service' });
        }
    }
    catch (error) {
        res
            .status(500)
            .json({ error: 'Error communicating with the tracking service' });
    }
}));
// Route to get all systems by user ID
systemRouter.get('/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const response = yield axios_1.default.get(`http://localhost:8080/${_id}`);
        if (response.status === 200) {
            res.status(200).json(response.data);
        }
        else {
            res
                .status(response.status)
                .json({ error: 'Unexpected status code from the tracking service' });
        }
    }
    catch (error) {
        res
            .status(500)
            .json({ error: 'Error communicating with the tracking service' });
    }
}));
// Define other routes for delete, get by system ID, and update as needed.
exports.default = systemRouter;
