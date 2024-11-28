
const express = require('express');
const { addProperty , categoryProperty, singleProperty } = require('../controller/list.controller');
const upload = require('../utils/multer');


const listRouter = express.Router();

listRouter.post('/add-property' , addProperty);
listRouter.get('/category', categoryProperty)
listRouter.get('/single-Property/:id', singleProperty)


module.exports = listRouter;  //export the router to use in other files.  //export