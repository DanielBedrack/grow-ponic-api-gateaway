import { Router } from 'express';
import systemRouter from './routes/system.routes';
import cycleRouter from './routes/cycle.routes';
import seedRouter from './routes/seedTracking.routes';
import userRouter from './routes/user.routes';
import plantRouter from './routes/plant.routes';

const trackingRouter = Router();

trackingRouter.use('/systems', systemRouter);
trackingRouter.use('/cycles', cycleRouter);
trackingRouter.use('/plants', plantRouter);
trackingRouter.use('/seed', seedRouter);
trackingRouter.use('/users', userRouter);

export default trackingRouter;
