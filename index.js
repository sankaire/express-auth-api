const express = require("express")
const app = express()

//import route
const auth = require("./routes/auth")

//route middleware
app.use("/api/user", auth)

const port = 3000
app.listen(port, () => console.log(`app running on http://localhost:${port}`))