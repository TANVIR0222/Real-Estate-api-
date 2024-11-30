
const express = require('express');
const { addProperty , categoryProperty, singleProperty ,productSearch} = require('../controller/list.controller');
const upload = require('../utils/multer');


const listRouter = express.Router();

listRouter.post('/add-property' , addProperty);
listRouter.get('/category', categoryProperty)
listRouter.get('/single-Property/:id', singleProperty)
listRouter.get('/search-Property', productSearch)


module.exports = listRouter;  //export the router to use in other files.  //export