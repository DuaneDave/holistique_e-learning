import { Router } from 'express';

import userRouter from './user.routes.js';
import newsletterRouter from './newsletter.routes.js';
import courseRouter from './course.routes.js';
import commentRouter from './comment.routes.js';

const apiRouter = Router();

apiRouter.use('/user', userRouter);
apiRouter.use('/newsletter', newsletterRouter);
apiRouter.use('/course', courseRouter);
apiRouter.use('/comment', commentRouter);

export default apiRouter;
