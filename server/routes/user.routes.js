import { Router } from 'express';
import multer from 'multer';
import path from 'path';

import {
  signup,
  login,
  logout,
  editProfile,
  addCourse,
  getUser,
} from '../controllers/user.controller.js';

const storage = multer.diskStorage({
  destination: 'uploads/profiles',
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${file.fieldname}-${Date.now()}${ext}`;
    cb(null, filename);
  },
});

const upload = multer({ storage }).single('file');

const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.delete('/logout', logout);
userRouter.put('/edit-profile/:id', upload, editProfile);
userRouter.put('/add-course/:id', addCourse);
userRouter.get('/currentUser/:id', getUser);

export default userRouter;
