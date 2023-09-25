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
exports.getPlantById = exports.getAllPlants = void 0;
const axios_1 = __importDefault(require("axios"));
const plantUrls_1 = require("../../urls/data/plantUrls");
const getAllPlants = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(plantUrls_1.data_plants_url);
        console.log(response.data);
        res.status(200).json(response.data);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: 'Error communicating with the data service' });
    }
});
exports.getAllPlants = getAllPlants;
const getPlantById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const plantId = req.params._id; // Get the _id parameter from the URL
        const plantResponse = yield axios_1.default.get(`${plantUrls_1.data_plants_url}/${plantId}`);
        if (!plantResponse) {
            res.status(404).json({ message: 'Plant Not Found' });
        }
        res.status(200).json(plantResponse.data);
    }
    catch (error) {
        // Handle network or other errors
        res
            .status(500)
            .json({ error: 'Error communicating with the data service' });
    }
});
exports.getPlantById = getPlantById;
