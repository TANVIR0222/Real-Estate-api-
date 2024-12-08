import express from "express";
import upload from "../utils/multer.js";
import {uploadeImage} from "../controller/uploade.controller.js";



const uploadeImageRouter = express.Router();
uploadeImageRouter.post('/uploade' , upload.single('avatar') , uploadeImage )
export default uploadeImageRouter;
