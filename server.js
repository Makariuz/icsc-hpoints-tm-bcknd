const express = require("express");
const mongoose = require('mongoose')

const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('MongoDB is connected')
}).catch(err => console.log(err))


app.get('/', (req,res) => {
    res.status(200).json('Choose a Route or Visit main website')
})
/* const studentRoute = require('./routes/students.routes')
app.use('/student', studentRoute) */
const houseRoute = require('./routes/house.routes')
app.use('/house', houseRoute)
const addRoute = require('./routes/add.routes')
app.use('/houses', addRoute)

const userRoute = require('./routes/user.routes')
app.use('/admin', userRoute)

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log("Listening in PORT: " + PORT);
});
