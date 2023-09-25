import { Router } from 'express';
import axios from 'axios';
import { data_plants_url } from '../../../urls/data/plantUrls';
import { getAllPlants, getPlantById } from '../../../controllers/data-controller/plantController';

const plantRouter = Router();

plantRouter.get('/', getAllPlants)

// Define a route to get plant data by ID
plantRouter.get('/:_id', getPlantById)

// TODO GET plant by filter params

export default plantRouter;
