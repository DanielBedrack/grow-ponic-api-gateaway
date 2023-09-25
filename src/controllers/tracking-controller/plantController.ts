import axios from 'axios';
import { Request, Response } from 'express';
import { tracking_systems_url } from '../../urls/tracking/trackingUrls';

// Create a new plant for a specific cycle
export const createPlant = async (req: Request, res: Response) => {
  const systemId = req.params.systemId;
  const cycleId = req.params.cycleId;
  try {
    // Forward the data to the tracking microservice, including the system ID and cycle ID
    const trackingResponse = await axios.post(
      `${tracking_systems_url}/${systemId}/cycles/${cycleId}/plants`,
      req.body
    );

    // Handle the response from the tracking microservice (optional)
    console.log('Response from tracking microservice:', trackingResponse.data);

    // Return a response to the client (optional)
    res.status(201).json({ message: 'Plant created successfully' });
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error forwarding data to tracking microservice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all plants for a specific cycle
export const getAllPlantsForCycle = async (req: Request, res: Response) => {
  const systemId = req.params.systemId;
  const cycleId = req.params.cycleId;
  try {
    // Forward the GET request to the tracking microservice, including the system ID and cycle ID
    const trackingResponse = await axios.get(
      `${tracking_systems_url}/${systemId}/cycles/${cycleId}/plants`
    );

    // Return the response from the tracking microservice to the client
    res.status(200).json(trackingResponse.data);
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error(
      'Error fetching plants for the cycle from tracking microservice:',
      error
    );
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a specific plant by ID for a specific cycle
export const getPlantById = async (req: Request, res: Response) => {
  const systemId = req.params.systemId;
  const cycleId = req.params.cycleId;
  const plantId = req.params.plantId;
  try {
    // Forward the GET request to the tracking microservice, including the system ID, cycle ID, and plant ID
    const trackingResponse = await axios.get(
      `${tracking_systems_url}/${systemId}/cycles/${cycleId}/plants/${plantId}`
    );

    // Return the response from the tracking microservice to the client
    res.status(200).json(trackingResponse.data);
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error(
      'Error fetching a specific plant for the cycle from tracking microservice:',
      error
    );
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a specific plant by ID for a specific cycle
export const updatePlant = async (req: Request, res: Response) => {
  const systemId = req.params.systemId;
  const cycleId = req.params.cycleId;
  const plantId = req.params.plantId;
  try {
    // Forward the PUT request to the tracking microservice, including the system ID, cycle ID, and plant ID
    const trackingResponse = await axios.put(
      `${tracking_systems_url}/${systemId}/cycles/${cycleId}/plants/${plantId}`,
      req.body
    );

    // Handle the response from the tracking microservice (optional)
    console.log('Response from tracking microservice:', trackingResponse.data);

    // Return a response to the client (optional)
    res.status(200).json({ message: 'Plant updated successfully' });
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error updating a specific plant for the cycle:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a specific plant by ID for a specific cycle
export const deletePlant = async (req: Request, res: Response) => {
  const systemId = req.params.systemId;
  const cycleId = req.params.cycleId;
  const plantId = req.params.plantId;
  // notice - const apiUrl = `/api/someEndpoint?systemId=${systemId}&cycleId=${cycleId}&plantId=${plantId}`;

  try {
    // Forward the DELETE request to the tracking microservice, including the system ID, cycle ID, and plant ID
    const trackingResponse = await axios.delete(
      `${tracking_systems_url}/${systemId}/cycles/${cycleId}/plants/${plantId}`
    );

    // Handle the response from the tracking microservice (optional)
    console.log('Response from tracking microservice:', trackingResponse.data);

    // Return a response to the client (optional)
    res.status(200).json({ message: 'Plant deleted successfully' });
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error deleting a specific plant for the cycle:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
