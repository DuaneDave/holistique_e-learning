import { Router } from 'express';

import userRouter from './user.routes.js';

const apiRouter = Router();

apiRouter.use('/user', userRouter);

export default apiRouter;