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
exports.getSystemByUserId = exports.getAllSystems = void 0;
const axios_1 = __importDefault(require("axios"));
const plantUrls_1 = require("../../urls/data/plantUrls");
const getAllSystems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const systemsResponse = yield axios_1.default.get(plantUrls_1.data_systems_url);
        console.log(systemsResponse.data);
        if (!systemsResponse) {
            res.status(404).json({ message: 'System Not Found By User ID' });
        }
        res.status(200).json(systemsResponse.data);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: 'Error communicating with the data service' });
    }
});
exports.getAllSystems = getAllSystems;
const getSystemByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const systemId = req.params._id; // Get the _id parameter from the URL
        const systemResponse = yield axios_1.default.get(`${plantUrls_1.data_systems_url}/${systemId}`);
        if (!systemResponse) {
            res.status(404).json({ message: 'System Not Found By User ID' });
        }
        // Check the status code of the response before sending it
        res.status(200).json(systemResponse.data);
    }
    catch (error) {
        // Handle network or other errors
        res
            .status(500)
            .json({ error: 'Error communicating with the data service' });
    }
});
exports.getSystemByUserId = getSystemByUserId;
