const express = require("express")
const app = express()

//import route
const auth = require("./routes/auth")

//pull in db models
require("./config/db")

//middleware
app.use("/api/user", auth)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const port = 3000
app.listen(port, () => console.log(`app running on http://localhost:${port}`))