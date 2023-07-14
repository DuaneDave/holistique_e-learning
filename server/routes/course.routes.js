import { Router } from 'express';

import { createCourse, getCourses, updateCourse, getCourse } from '../controllers/course.controller.js';

const courseRouter = Router();

courseRouter.post('/create', createCourse);
courseRouter.get('/', getCourses);
courseRouter.put('/:id', updateCourse);
courseRouter.get('/:id', getCourse);

export default courseRouter;