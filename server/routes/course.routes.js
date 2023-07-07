import { Router } from 'express';

import { createCourse, getCourses, updateCourse } from '../controllers/course.controller.js';

const courseRouter = Router();

courseRouter.post('/create', createCourse);
courseRouter.get('/', getCourses);
courseRouter.put('/:id', updateCourse);

export default courseRouter;