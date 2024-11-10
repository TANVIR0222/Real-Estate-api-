
const express = require('express');
const {register,singin} = require('../controller/user.auth.controller');

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/singin', singin);

module.exports = userRouter