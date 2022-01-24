const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()
//connect to db
mongoose.connect(
    process.env.MONGO_URI,
    () => console.log("connected to Database!!"))

