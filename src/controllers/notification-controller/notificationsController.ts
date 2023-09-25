import axios from 'axios';
import { Request, Response } from 'express';
import { notification_url } from '../../urls/notifications/notificationURL';

export const seedNotification = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${notification_url}/seed`);
    console.log(response.data);
    if (!response) {
      res
        .status(404)
        .send({ message: 'notification seed is not found from gateaway' });
    }
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).send('Server internal Error: ' + error);
  }
};

export const dailyNotification = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${notification_url}/send-tip-of-the-day`);
    console.log(response.data);
    if (!response) {
      res
        .status(404)
        .send({ message: 'notification seed is not found from gateaway' });
    }
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).send('Server internal Error: ' + error);
  }
};
export const valuesCheckNotification = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${notification_url}/send-values-check`);
    console.log(response.data);
    if (!response) {
      res
        .status(404)
        .send({ message: 'notification seed is not found from gateaway' });
    }
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).send('Server internal Error: ' + error);
  }
};
export const seasonCheckNotification = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${notification_url}/send-end-season`);
    console.log(response.data);
    if (!response) {
      res
        .status(404)
        .send({ message: 'notification seed is not found from gateaway' });
    }
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).send('Server internal Error: ' + error);
  }
};
export const cycleCheckNotification = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${notification_url}/send-end-cycle`);
    console.log(response.data);
    if (!response) {
      res
        .status(404)
        .send({ message: 'notification seed is not found from gateaway' });
    }
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).send('Server internal Error: ' + error);
  }
};
