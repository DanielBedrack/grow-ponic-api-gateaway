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
exports.cycleCheckNotification = exports.seasonCheckNotification = exports.valuesCheckNotification = exports.dailyNotification = exports.seedNotification = void 0;
const axios_1 = __importDefault(require("axios"));
const notificationURL_1 = require("../../urls/notifications/notificationURL");
const seedNotification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${notificationURL_1.notification_url}/seed`);
        console.log(response.data);
        if (!response) {
            res
                .status(404)
                .send({ message: 'notification seed is not found from gateaway' });
        }
        res.status(200).json(response.data);
    }
    catch (error) {
        res.status(500).send('Server internal Error: ' + error);
    }
});
exports.seedNotification = seedNotification;
const dailyNotification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${notificationURL_1.notification_url}/send-tip-of-the-day`);
        console.log(response.data);
        if (!response) {
            res
                .status(404)
                .send({ message: 'notification seed is not found from gateaway' });
        }
        res.status(200).json(response.data);
    }
    catch (error) {
        res.status(500).send('Server internal Error: ' + error);
    }
});
exports.dailyNotification = dailyNotification;
const valuesCheckNotification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${notificationURL_1.notification_url}/send-values-check`);
        console.log(response.data);
        if (!response) {
            res
                .status(404)
                .send({ message: 'notification seed is not found from gateaway' });
        }
        res.status(200).json(response.data);
    }
    catch (error) {
        res.status(500).send('Server internal Error: ' + error);
    }
});
exports.valuesCheckNotification = valuesCheckNotification;
const seasonCheckNotification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${notificationURL_1.notification_url}/send-end-season`);
        console.log(response.data);
        if (!response) {
            res
                .status(404)
                .send({ message: 'notification seed is not found from gateaway' });
        }
        res.status(200).json(response.data);
    }
    catch (error) {
        res.status(500).send('Server internal Error: ' + error);
    }
});
exports.seasonCheckNotification = seasonCheckNotification;
const cycleCheckNotification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${notificationURL_1.notification_url}/send-end-cycle`);
        console.log(response.data);
        if (!response) {
            res
                .status(404)
                .send({ message: 'notification seed is not found from gateaway' });
        }
        res.status(200).json(response.data);
    }
    catch (error) {
        res.status(500).send('Server internal Error: ' + error);
    }
});
exports.cycleCheckNotification = cycleCheckNotification;
