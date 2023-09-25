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
const plantUrls_1 = require("../../../urls/data/plantUrls");
const diseaseRouter = (0, express_1.Router)();
diseaseRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(plantUrls_1.data_diseases_url);
        console.log(response.data);
        res.status(200).json(response.data);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: 'Error communicating with the data service' });
    }
}));
// Define a route to get plant data by ID
diseaseRouter.get('/diseases/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params; // Get the _id parameter from the URL
        const response = yield axios_1.default.get(`${plantUrls_1.data_diseases_url}/${_id}`);
        if (response.status === 200) {
            // Check the status code of the response before sending it
            res.status(200).json(response.data);
        }
        else {
            // Handle unexpected status codes appropriately
            res
                .status(response.status)
                .json({ error: 'Unexpected status code from the data service' });
        }
    }
    catch (error) {
        // Handle network or other errors
        res
            .status(500)
            .json({ error: 'Error communicating with the data service' });
    }
}));
exports.default = diseaseRouter;
