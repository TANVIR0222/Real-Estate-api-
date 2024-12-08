import mongoose from "mongoose";

const courseShema = mongoose.Schema({

    courseName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startingDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    imageId: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
},{timestampa : true});

const Course = mongoose.model("Course", courseShema);
export default Course;