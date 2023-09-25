import axios from 'axios';
import { Request, Response } from 'express';
import { data_seed_url } from '../../urls/data/plantUrls';

export const seedData = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(data_seed_url);
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error communicating with the data service' });
  }
};
