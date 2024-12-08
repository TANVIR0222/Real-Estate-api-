
import express from "express";
import {register,singin, logout} from '../controller/user.auth.controller.js'

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/singin', singin);
userRouter.post('/logout', logout);

export default userRouter