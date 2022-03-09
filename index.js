const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
require('./config/db.connect');
dotenv.config();

const usersRouter = require('./routes/auth.route');
//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/users', usersRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`api running on ${PORT}`));
