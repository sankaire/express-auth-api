const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const url = process.env.MONGO_URI;

mongoose
  .connect(url)
  .then(() => console.log('mongodb connected'))
  .catch((err) => console.log(err));
