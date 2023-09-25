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
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
const registry_json_1 = __importDefault(require("./registry.json"));
const allRouter = (0, express_1.Router)();
allRouter.all('/:apiName/:path', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params.apiName + ' Hello');
    const apiName = req.params.apiName;
    if (!registry_json_1.default.services.hasOwnProperty(apiName)) {
        res.status(404).send(`API ${apiName} not found`);
        return;
    }
    const apiUrl = registry_json_1.default.services.dataapi.url;
    console.log(apiUrl);
    const response = yield axios_1.default.get(`'${apiUrl}'`);
    res.send(response.data);
    res.send(req.params.apiName);
}));
exports.default = allRouter;
