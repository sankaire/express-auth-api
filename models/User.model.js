const mongoose = require('mongoose');
const User = mongoose.Schema({
  fullName: {
    required: true,
    type: String,
    max: 50,
  },
  email: {
    required: true,
    type: String,
    max: 50,
  },
  password: {
    required: true,
    type: String,
    max: 10,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const user = mongoose.model('user', User);
module.exports = user;
