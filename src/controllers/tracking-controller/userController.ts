// systemController.ts
import axios from 'axios';
import { Request, Response } from 'express';
import { tracking_users_url } from '../../urls/tracking/trackingUrls';

// Get all plants for a specific cycle
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    // Forward the GET request to the tracking microservice, including the system ID and cycle ID
    const userResponse = await axios.get(`${tracking_users_url}`);

    // Return the response from the tracking microservice to the client
    res.status(200).json(userResponse.data);
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error(
      'Error fetching plants for the cycle from tracking microservice:',
      error
    );
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const userRegister = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    
    // Forward the POST request to the tracking microservice, including the user data
    const userResponse = await axios.post(`http://localhost:8080/api/v1/users/register`, user);

    // Extract relevant data from the tracking service response
    const responseData = userResponse.data;

    // Check if the response status is 200 (successful)
    if (userResponse.status === 200) {
      // Send the relevant data to the client
      return res.status(200).json({
        _id: responseData._id,
        firstName: responseData.firstName,
        lastName: responseData.lastName,
        email: responseData.email,
        token: responseData.token,
        message: 'Registration successful.',
      });
    } else {
      // Handle other status codes if needed
      return res.status(userResponse.status).json(responseData); // Pass the entire response data to the client
    }
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error(
      'Error posting User for Tracking microservice from API-Gateaway:',
      error
    );
    return res.status(500).json({ error: 'Internal server error' });
  }
};



export const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const userEmail = req.params.email;
    const userResponse = await axios.get(`${tracking_users_url}/${userEmail}`);
    console.log(userResponse);
    res.status(200).json(userResponse.data);
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error(
      'Error fetching user by email from tracking microservice:',
      error
    );
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const userLogin = async (req: Request, res: Response) => {
  try {
    // Forward the GET request to the tracking microservice, including the system ID and cycle ID
    const userResponse = await axios.post(`${tracking_users_url}/login`);

    // Return the response from the tracking microservice to the client
    res.status(200).json(userResponse.data);
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error fetching user from tracking microservice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userEmail = req.params.email;
    //const newUser = req.body;
    const userResponse = await axios.put(`${tracking_users_url}/${userEmail}`);
    console.log(userResponse);
    res.status(200).json(userResponse.data);
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error(
      'Error fetching user by email from tracking microservice:',
      error
    );
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userEmail = req.params.email;
    const userResponse = await axios.delete(
      `${tracking_users_url}/${userEmail}`
    );
    console.log(userResponse);
    res.status(200).json(userResponse.data);
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error(
      'Error fetching user by email from tracking microservice:',
      error
    );
    res.status(500).json({ error: 'Internal server error' });
  }
};
