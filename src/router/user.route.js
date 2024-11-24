
const express = require('express');
const {register,singin, logout} = require('../controller/user.auth.controller');

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/singin', singin);
userRouter.post('/logout', logout);

module.exports = userRouter