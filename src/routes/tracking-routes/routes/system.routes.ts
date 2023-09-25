import { Router } from 'express';
import axios from 'axios';
import {
  createSystem,
  deleteSystem,
  getAllSystems,
  getSystemById,
  updateSystem,
} from '../../../controllers/tracking-controller/systemController';

const systemRouter = Router();

// Create a new system
systemRouter.post('/create-system', createSystem);

// Get all systems
systemRouter.get('/systems', getAllSystems);

// Get a specific system by ID
systemRouter.get('/:systemId', getSystemById);

// Update a specific system by ID
systemRouter.put('/:systemId', updateSystem);

// Delete a specific system by ID
systemRouter.delete('/:systemId', deleteSystem);

export default systemRouter;
