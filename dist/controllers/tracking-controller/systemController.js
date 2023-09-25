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
exports.deleteSystem = exports.updateSystem = exports.getSystemById = exports.getAllSystems = exports.createSystem = void 0;
// systemController.ts
const axios_1 = __importDefault(require("axios"));
const trackingUrls_1 = require("../../urls/tracking/trackingUrls");
// Create a new system
const createSystem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const systemData = req.body;
        console.log('hello from create system', systemData);
        // Forward the data to the tracking microservice
        const trackingResponse = yield axios_1.default.post(`${trackingUrls_1.tracking_systems_url}/create-system`, req.body);
        // Handle the response from the tracking microservice (optional)
        console.log('Response from tracking microservice:', trackingResponse.data);
        // Return a response to the client (optional)
        res.status(201).json({ message: 'System created successfully' });
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error forwarding data to tracking microservice:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.createSystem = createSystem;
// Get all systems
const getAllSystems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Forward the GET request to the tracking microservice
        const trackingResponse = yield axios_1.default.get('http://tracking-microservice-url/api/systems');
        // Return the response from the tracking microservice to the client
        res.status(200).json(trackingResponse.data);
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error fetching systems from tracking microservice:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getAllSystems = getAllSystems;
// Get a specific system by ID
const getSystemById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const systemId = req.params.systemId;
    try {
        // Forward the GET request to the tracking microservice
        const trackingResponse = yield axios_1.default.get(`http://tracking-microservice-url/api/systems/${systemId}`);
        // Return the response from the tracking microservice to the client
        res.status(200).json(trackingResponse.data);
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error fetching a system from tracking microservice:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getSystemById = getSystemById;
// Update a specific system by ID
const updateSystem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const systemId = req.params.systemId;
    try {
        // Forward the PUT request to update the system in the tracking microservice
        const trackingResponse = yield axios_1.default.put(`http://tracking-microservice-url/api/systems/${systemId}`, req.body);
        // Return the response from the tracking microservice to the client
        res.status(200).json(trackingResponse.data);
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error updating a system in tracking microservice:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.updateSystem = updateSystem;
// Delete a specific system by ID
const deleteSystem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const systemId = req.params.systemId;
    try {
        // Forward the DELETE request to delete the system in the tracking microservice
        const trackingResponse = yield axios_1.default.delete(`http://tracking-microservice-url/api/systems/${systemId}`);
        // Return the response from the tracking microservice to the client
        res.status(204).send();
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error deleting a system in tracking microservice:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.deleteSystem = deleteSystem;
