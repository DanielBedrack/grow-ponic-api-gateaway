import axios from 'axios';
import { Request, Response } from 'express';
import { tracking_systems_url } from '../../urls/tracking/trackingUrls';

// Create a new cycle for a specific system
export const postCycle = async (req: Request, res: Response) => {
  const systemId = req.params.systemId;
  try {
    // Forward the data to the tracking microservice, including the system ID
    const trackingResponse = await axios.post(
      `${tracking_systems_url}/${systemId}/cycles`,
      req.body
    );

    // Handle the response from the tracking microservice (optional)
    console.log('Response from tracking microservice:', trackingResponse.data);

    // Return a response to the client (optional)
    res.status(201).json({ message: 'Cycle created successfully' });
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error forwarding data to tracking microservice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all cycles for a specific system
export const getAllCyclesForSystem = async (req: Request, res: Response) => {
  const systemId = req.params.systemId;
  try {
    // Forward the GET request to the tracking microservice, including the system ID
    const trackingResponse = await axios.get(
      `${tracking_systems_url}/${systemId}/cycles`
    );

    // Return the response from the tracking microservice to the client
    res.status(200).json(trackingResponse.data);
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error(
      'Error fetching cycles for the system from tracking microservice:',
      error
    );
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a specific cycle by ID for a specific system
export const getCycleById = async (req: Request, res: Response) => {
  const systemId = req.params.systemId;
  const cycleId = req.params.cycleId;
  try {
    // Forward the GET request to the tracking microservice, including the system ID and cycle ID
    const trackingResponse = await axios.get(
      `${tracking_systems_url}/${systemId}/cycles/${cycleId}`
    );

    // Return the response from the tracking microservice to the client
    res.status(200).json(trackingResponse.data);
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error(
      'Error fetching a specific cycle for the system from tracking microservice:',
      error
    );
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a specific cycle by ID for a specific system
export const updateCycle = async (req: Request, res: Response) => {
  const systemId = req.params.systemId;
  const cycleId = req.params.cycleId;
  try {
    // Forward the PUT request to the tracking microservice, including the system ID and cycle ID
    const trackingResponse = await axios.put(
      `${tracking_systems_url}/${systemId}/cycles/${cycleId}`,
      req.body
    );

    // Handle the response from the tracking microservice (optional)
    console.log('Response from tracking microservice:', trackingResponse.data);

    // Return a response to the client (optional)
    res.status(200).json({ message: 'Cycle updated successfully' });
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error updating a specific cycle for the system:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a specific cycle by ID for a specific system
export const deleteCycle = async (req: Request, res: Response) => {
  const systemId = req.params.systemId;
  const cycleId = req.params.cycleId;
  try {
    // Forward the DELETE request to the tracking microservice, including the system ID and cycle ID
    const trackingResponse = await axios.delete(
      `${tracking_systems_url}/${systemId}/cycles/${cycleId}`
    );

    // Handle the response from the tracking microservice (optional)
    console.log('Response from tracking microservice:', trackingResponse.data);

    // Return a response to the client (optional)
    res.status(200).json({ message: 'Cycle deleted successfully' });
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error deleting a specific cycle for the system:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


