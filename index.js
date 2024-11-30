
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const helmet = require('helmet')


const app = express()
const port = process.env.PORT || 5000


// middleware
dotenv.config();
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use(helmet());


// router 

const userRouter = require('./src/router/user.route');
const connectDB = require('./src/db/connectDB');
const listRouter = require('./src/router/list.route');
const uploadeImageRouter = require('./src/router/uploadeImage.route');
const bookingRoute = require('./src/router/booking.route');
const tripListRoute = require('./src/router/trip.route');

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
