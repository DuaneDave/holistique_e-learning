import { Router } from 'express';

import userRouter from './user.routes.js';
import newsletterRouter from './newsletter.routes.js';

const apiRouter = Router();

apiRouter.use('/user', userRouter);
apiRouter.use('/newsletter', newsletterRouter);

export default apiRouter;
