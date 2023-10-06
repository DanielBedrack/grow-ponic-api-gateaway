import { Router } from 'express';
import { deleteCycle, getAllCyclesForSystem, getCycleById, postCycle, updateCycle } from '../../../controllers/tracking-controller/cycleController';

const cycleRouter = Router();

// Create a new cycle for a specific system
cycleRouter.post('/create-cycle/:systemId', postCycle);

// Get all cycles for a specific system
cycleRouter.get('/:_id', getAllCyclesForSystem);

// Get a specific cycle by ID for a specific system
cycleRouter.get('/:cycleId', getCycleById);

// Update a specific cycle by ID for a specific system
cycleRouter.put('/:cycleId', updateCycle);

// Delete a specific cycle by ID for a specific system
cycleRouter.delete('/:cycleId', deleteCycle);


export default cycleRouter;
