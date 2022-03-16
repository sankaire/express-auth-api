const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.MONGO_URI;
try {
  mongoose.connect(uri).then(console.log('mongodb connected'));
} catch (err) {
  console.log(err);
}
