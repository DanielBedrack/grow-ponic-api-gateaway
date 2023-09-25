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
exports.deletePlant = exports.updatePlant = exports.getPlantById = exports.getAllPlantsForCycle = exports.createPlant = void 0;
const axios_1 = __importDefault(require("axios"));
const trackingUrls_1 = require("../../urls/tracking/trackingUrls");
// Create a new plant for a specific cycle
const createPlant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const systemId = req.params.systemId;
    const cycleId = req.params.cycleId;
    try {
        // Forward the data to the tracking microservice, including the system ID and cycle ID
        const trackingResponse = yield axios_1.default.post(`${trackingUrls_1.tracking_systems_url}/${systemId}/cycles/${cycleId}/plants`, req.body);
        // Handle the response from the tracking microservice (optional)
        console.log('Response from tracking microservice:', trackingResponse.data);
        // Return a response to the client (optional)
        res.status(201).json({ message: 'Plant created successfully' });
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error forwarding data to tracking microservice:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.createPlant = createPlant;
// Get all plants for a specific cycle
const getAllPlantsForCycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const systemId = req.params.systemId;
    const cycleId = req.params.cycleId;
    try {
        // Forward the GET request to the tracking microservice, including the system ID and cycle ID
        const trackingResponse = yield axios_1.default.get(`${trackingUrls_1.tracking_systems_url}/${systemId}/cycles/${cycleId}/plants`);
        // Return the response from the tracking microservice to the client
        res.status(200).json(trackingResponse.data);
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error fetching plants for the cycle from tracking microservice:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getAllPlantsForCycle = getAllPlantsForCycle;
// Get a specific plant by ID for a specific cycle
const getPlantById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const systemId = req.params.systemId;
    const cycleId = req.params.cycleId;
    const plantId = req.params.plantId;
    try {
        // Forward the GET request to the tracking microservice, including the system ID, cycle ID, and plant ID
        const trackingResponse = yield axios_1.default.get(`${trackingUrls_1.tracking_systems_url}/${systemId}/cycles/${cycleId}/plants/${plantId}`);
        // Return the response from the tracking microservice to the client
        res.status(200).json(trackingResponse.data);
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error fetching a specific plant for the cycle from tracking microservice:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getPlantById = getPlantById;
// Update a specific plant by ID for a specific cycle
const updatePlant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const systemId = req.params.systemId;
    const cycleId = req.params.cycleId;
    const plantId = req.params.plantId;
    try {
        // Forward the PUT request to the tracking microservice, including the system ID, cycle ID, and plant ID
        const trackingResponse = yield axios_1.default.put(`${trackingUrls_1.tracking_systems_url}/${systemId}/cycles/${cycleId}/plants/${plantId}`, req.body);
        // Handle the response from the tracking microservice (optional)
        console.log('Response from tracking microservice:', trackingResponse.data);
        // Return a response to the client (optional)
        res.status(200).json({ message: 'Plant updated successfully' });
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error updating a specific plant for the cycle:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.updatePlant = updatePlant;
// Delete a specific plant by ID for a specific cycle
const deletePlant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const systemId = req.params.systemId;
    const cycleId = req.params.cycleId;
    const plantId = req.params.plantId;
    // notice - const apiUrl = `/api/someEndpoint?systemId=${systemId}&cycleId=${cycleId}&plantId=${plantId}`;
    try {
        // Forward the DELETE request to the tracking microservice, including the system ID, cycle ID, and plant ID
        const trackingResponse = yield axios_1.default.delete(`${trackingUrls_1.tracking_systems_url}/${systemId}/cycles/${cycleId}/plants/${plantId}`);
        // Handle the response from the tracking microservice (optional)
        console.log('Response from tracking microservice:', trackingResponse.data);
        // Return a response to the client (optional)
        res.status(200).json({ message: 'Plant deleted successfully' });
    }
    catch (error) {
        // Handle errors and send an error response to the client
        console.error('Error deleting a specific plant for the cycle:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.deletePlant = deletePlant;
