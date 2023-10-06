import { Router } from "express";
import dataRouter from "./dataRoute/index.routes";
import trackingRouter from "./tracking-routes/index.routes";
import notificationRouter from "./notifications-routes/index.routes";

const rootRouter = Router();

rootRouter.use('/data', dataRouter);
rootRouter.use('/tracking', trackingRouter);
rootRouter.use('/notification', notificationRouter);

export default rootRouter;