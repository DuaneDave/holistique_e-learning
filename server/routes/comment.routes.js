import { Router } from 'express';

import {
  createComment,
  like,
  dislike,
} from '../controllers/comment.controller.js';

const commentRouter = Router();

commentRouter.post('/create', createComment);
commentRouter.put('/:id/like', like);
commentRouter.delete('/:id/dislike', dislike);

export default commentRouter;
