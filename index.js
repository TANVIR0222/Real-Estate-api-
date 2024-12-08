
import express from "express";
import cors from "cors";
import "dotenv/config";
import bodyParser from "body-parser";
import helmet from "helmet";
import userRouter from "./src/router/user.route.js";
import listRouter from "./src/router/list.route.js";
import uploadeImageRouter from "./src/router/uploadeImage.route.js";
import bookingRoute from "./src/router/booking.route.js";
import tripListRoute from "./src/router/trip.route.js";
import connectDB from "./src/db/connectDB.js";

const app = express()
const port = process.env.PORT || 5000


// middleware
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use(helmet());



app.use('/api/auth', userRouter )
app.use('/api/post', listRouter)
app.use('/api/file', uploadeImageRouter)
app.use('/api/booking', bookingRoute)
app.use('/api/trip', tripListRoute)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connectDB();
})

// console.log(process.env.API_SECRET);
