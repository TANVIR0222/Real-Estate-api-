import express from "express";

import {addProperty,categoryProperty,singleProperty,productSearch,} from "../controller/list.controller.js";

const listRouter = express.Router();

listRouter.post("/add-property", addProperty);
listRouter.get("/category", categoryProperty);
listRouter.get("/single-Property/:id", singleProperty);
listRouter.get("/search-Property", productSearch);

export default listRouter; //export the router to use in other files.  //export
