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
exports.seedTracking = void 0;
const axios_1 = __importDefault(require("axios"));
const trackingUrls_1 = require("../../urls/tracking/trackingUrls");
const seedTracking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(trackingUrls_1.tracking_seed_url);
        console.log(response.data);
        res.status(200).json(response.data);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: 'Error communicating with the data service' });
    }
});
exports.seedTracking = seedTracking;
