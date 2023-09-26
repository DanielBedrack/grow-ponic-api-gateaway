// systemController.ts
import axios from 'axios';
import { Request, Response } from 'express';

// Create a new system
export const createSystem = async (req: Request, res: Response) => {
  try {
    const systemData = req.body;
    console.log('hello from create system', systemData);

    // Forward the data to the tracking microservice
    const trackingResponse = await axios.post(
      `http://localhost:8080/api/v1/systems/create-system`,
      systemData
    );

    // Handle the response from the tracking microservice (optional)
    console.log('Response from tracking microservice:', trackingResponse);

    // Return a response to the client (optional)
    res
      .status(200)
      .json({
        message: 'System created successfully',
        system: trackingResponse,
      });
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error forwarding data to tracking microservice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all systems
export const getAllSystems = async (req: Request, res: Response) => {
  try {
    // Forward the GET request to the tracking microservice
    const trackingResponse = await axios.get(
      'http://tracking-microservice-url/api/systems'
    );

    // Return the response from the tracking microservice to the client
    res.status(200).json(trackingResponse.data);
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error fetching systems from tracking microservice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a specific system by ID
export const getSystemById = async (req: Request, res: Response) => {
  const systemId = req.params.systemId;
  try {
    // Forward the GET request to the tracking microservice
    const trackingResponse = await axios.get(
      `http://tracking-microservice-url/api/systems/${systemId}`
    );

    // Return the response from the tracking microservice to the client
    res.status(200).json(trackingResponse.data);
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error fetching a system from tracking microservice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a specific system by ID
export const updateSystem = async (req: Request, res: Response) => {
  const systemId = req.params.systemId;
  try {
    // Forward the PUT request to update the system in the tracking microservice
    const trackingResponse = await axios.put(
      `http://tracking-microservice-url/api/systems/${systemId}`,
      req.body
    );

    // Return the response from the tracking microservice to the client
    res.status(200).json(trackingResponse.data);
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error updating a system in tracking microservice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a specific system by ID
export const deleteSystem = async (req: Request, res: Response) => {
  const systemId = req.params.systemId;
  try {
    // Forward the DELETE request to delete the system in the tracking microservice
    const trackingResponse = await axios.delete(
      `http://tracking-microservice-url/api/systems/${systemId}`
    );

    // Return the response from the tracking microservice to the client
    res.status(204).send();
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error deleting a system in tracking microservice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
