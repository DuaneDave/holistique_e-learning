import { Router } from 'express';
import multer from 'multer';

import { signup, login, logout, editProfile, addCourse, getUser } from '../controllers/user.controller.js';

const upload = multer({ dest: 'uploads/' });
const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.delete('/logout', logout);
userRouter.put('/edit-profile', upload.single('file'), editProfile);
userRouter.put('/add-course/:id', addCourse);
userRouter.get('/:id', getUser);


export default userRouter;
