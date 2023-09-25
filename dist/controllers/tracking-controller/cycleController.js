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
exports.deleteCycle = exports.updateCycle = exports.getCycleById = exports.getAllCyclesForSystem = exports.postCycle = void 0;
const axios_1 = __importDefault(require("axios"));
const trackingUrls_1 = require("../../urls/tracking/trackingUrls");
// Create a new cycle for a specific system
const postCycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const systemId = req.params.systemId;
    try {
        // Forward the data to the tracking microservice, including the system ID
        const trackingResponse = yield axios_1.default.post(`${trackingUrls_1.tracking_systems_url}/${systemId}/cycles`, req.body);
        // Handle the response from the tracking microservice (optional)
        console.log('Response from tracking microservice:', trackingResponse.data);
        // Return a response to the client (optional)
        res.status(201).json({ message: 'Cycle created successfully' });
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error forwarding data to tracking microservice:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.postCycle = postCycle;
// Get all cycles for a specific system
const getAllCyclesForSystem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const systemId = req.params.systemId;
    try {
        // Forward the GET request to the tracking microservice, including the system ID
        const trackingResponse = yield axios_1.default.get(`${trackingUrls_1.tracking_systems_url}/${systemId}/cycles`);
        // Return the response from the tracking microservice to the client
        res.status(200).json(trackingResponse.data);
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error fetching cycles for the system from tracking microservice:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getAllCyclesForSystem = getAllCyclesForSystem;
// Get a specific cycle by ID for a specific system
const getCycleById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const systemId = req.params.systemId;
    const cycleId = req.params.cycleId;
    try {
        // Forward the GET request to the tracking microservice, including the system ID and cycle ID
        const trackingResponse = yield axios_1.default.get(`${trackingUrls_1.tracking_systems_url}/${systemId}/cycles/${cycleId}`);
        // Return the response from the tracking microservice to the client
        res.status(200).json(trackingResponse.data);
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error fetching a specific cycle for the system from tracking microservice:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getCycleById = getCycleById;
// Update a specific cycle by ID for a specific system
const updateCycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const systemId = req.params.systemId;
    const cycleId = req.params.cycleId;
    try {
        // Forward the PUT request to the tracking microservice, including the system ID and cycle ID
        const trackingResponse = yield axios_1.default.put(`${trackingUrls_1.tracking_systems_url}/${systemId}/cycles/${cycleId}`, req.body);
        // Handle the response from the tracking microservice (optional)
        console.log('Response from tracking microservice:', trackingResponse.data);
        // Return a response to the client (optional)
        res.status(200).json({ message: 'Cycle updated successfully' });
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error updating a specific cycle for the system:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.updateCycle = updateCycle;
// Delete a specific cycle by ID for a specific system
const deleteCycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const systemId = req.params.systemId;
    const cycleId = req.params.cycleId;
    try {
        // Forward the DELETE request to the tracking microservice, including the system ID and cycle ID
        const trackingResponse = yield axios_1.default.delete(`${trackingUrls_1.tracking_systems_url}/${systemId}/cycles/${cycleId}`);
        // Handle the response from the tracking microservice (optional)
        console.log('Response from tracking microservice:', trackingResponse.data);
        // Return a response to the client (optional)
        res.status(200).json({ message: 'Cycle deleted successfully' });
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error deleting a specific cycle for the system:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.deleteCycle = deleteCycle;
