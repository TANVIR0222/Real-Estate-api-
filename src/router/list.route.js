
const express = require('express');
const { upload, addProperty  } = require('../controller/list.controller');


const listRouter = express.Router();

listRouter.post('/add-property' , upload.array('photoList') , addProperty);


module.exports = listRouter;  //export the router to use in other files.  //export