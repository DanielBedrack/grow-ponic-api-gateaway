import express from 'express';
import {
  createPlant,
  getAllPlantsForCycle,
  getPlantById,
  updatePlant,
  deletePlant,
} from '../../../controllers/tracking-controller/plantController';

const plantRouter = express.Router();

// Create a new plant for a specific cycle
plantRouter.post('/', createPlant);

// Get all plants for a specific cycle
plantRouter.get('/:_id', getAllPlantsForCycle);

// Get a specific plant by ID for a specific cycle
plantRouter.get('/:plantId', getPlantById);

// Update a specific plant by ID for a specific cycle
plantRouter.put('/:plantId', updatePlant);

// Delete a specific plant by ID for a specific cycle
plantRouter.delete('/:plantId', deletePlant);

export default plantRouter;
