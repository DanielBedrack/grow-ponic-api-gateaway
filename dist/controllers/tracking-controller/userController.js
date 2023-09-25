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
exports.deleteUser = exports.updateUser = exports.userLogin = exports.getUserByEmail = exports.userRegister = exports.getAllUsers = void 0;
// systemController.ts
const axios_1 = __importDefault(require("axios"));
const trackingUrls_1 = require("../../urls/tracking/trackingUrls");
// Get all plants for a specific cycle
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Forward the GET request to the tracking microservice, including the system ID and cycle ID
        const userResponse = yield axios_1.default.get(`${trackingUrls_1.tracking_users_url}`);
        // Return the response from the tracking microservice to the client
        res.status(200).json(userResponse.data);
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error fetching plants for the cycle from tracking microservice:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getAllUsers = getAllUsers;
const userRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Hello from registerFunc');
        // Forward the GET request to the tracking microservice, including the system ID and cycle ID
        const userResponse = yield axios_1.default.post(`http://localhost:5000/api/v1/users/register `);
        //http://localhost:5000/api/v1/user/register 
        // Return the response from the tracking microservice to the client
        res.status(200).json(userResponse.data);
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error fetching plants for the cycle from tracking microservice:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.userRegister = userRegister;
const getUserByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userEmail = req.params.email;
        const userResponse = yield axios_1.default.get(`${trackingUrls_1.tracking_users_url}/${userEmail}`);
        console.log(userResponse);
        res.status(200).json(userResponse.data);
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error fetching user by email from tracking microservice:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getUserByEmail = getUserByEmail;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Forward the GET request to the tracking microservice, including the system ID and cycle ID
        const userResponse = yield axios_1.default.post(`${trackingUrls_1.tracking_users_url}/login`);
        // Return the response from the tracking microservice to the client
        res.status(200).json(userResponse.data);
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error fetching user from tracking microservice:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.userLogin = userLogin;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userEmail = req.params.email;
        //const newUser = req.body;
        const userResponse = yield axios_1.default.put(`${trackingUrls_1.tracking_users_url}/${userEmail}`);
        console.log(userResponse);
        res.status(200).json(userResponse.data);
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error fetching user by email from tracking microservice:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userEmail = req.params.email;
        const userResponse = yield axios_1.default.delete(`${trackingUrls_1.tracking_users_url}/${userEmail}`);
        console.log(userResponse);
        res.status(200).json(userResponse.data);
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error fetching user by email from tracking microservice:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.deleteUser = deleteUser;
