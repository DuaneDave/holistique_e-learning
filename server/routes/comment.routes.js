import { Router } from 'express';

import {
  createComment,
  like,
  dislike,
} from '../controllers/comment.controller.js';

const commentRouter = Router();

commentRouter.post('/create', createComment);
commentRouter.put('/like', like);
commentRouter.put('/dislike', dislike);

export default commentRouter;
