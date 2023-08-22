import { Router } from 'express';
import multer from 'multer';
import path from 'path';

import {
  createCourse,
  addCourseLesson,
  getCourses,
  updateCourse,
  getCourse,
} from '../controllers/course.controller.js';

const courseRouter = Router();

const storage = multer.diskStorage({
  destination: 'uploads/courses',
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${file.fieldname}-${Date.now()}${ext}`;
    cb(null, filename);
  },
});

const upload = multer({ storage }).fields([
  { name: 'cover', maxCount: 1 },
  { name: 'file', maxCount: 1 },
]);

const addSingle = multer({ storage }).single('file');

courseRouter.post('/create', upload, createCourse);
courseRouter.post('/add-lesson/:id', addSingle, addCourseLesson);
courseRouter.get('/', getCourses);
courseRouter.put('/:id', updateCourse);
courseRouter.get('/:id', getCourse);

export default courseRouter;
