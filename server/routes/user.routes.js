import { Router } from 'express';
import multer from 'multer';

import { signup, login, logout, editProfile, addCourse } from '../controllers/user.controller.js';

const upload = multer({ dest: 'uploads/' });
const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.delete('/logout', logout);
userRouter.put('/edit-profile/:id', upload.single('file'), editProfile);
userRouter.put('/add-course/:id', addCourse);


export default userRouter;
