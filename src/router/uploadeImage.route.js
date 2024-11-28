
const express = require('express');
const upload = require('../utils/multer');
const uploadeImage = require('../controller/uploade.controller');


const uploadeImageRouter = express.Router();
uploadeImageRouter.post('/uploade' , upload.single('avatar') , uploadeImage )
module.exports = uploadeImageRouter;
