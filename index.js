
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')


const app = express()
const port = process.env.PORT || 5000


// middleware
dotenv.config();
app.use(bodyParser.json())
app.use(cors())
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))


// router 

const userRouter = require('./src/router/user.route');
const connectDB = require('./src/db/connectDB');

app.use('/api/auth', userRouter )


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connectDB();
})

// console.log(process.env.API_SECRET);
