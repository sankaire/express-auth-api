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
});

module.exports = User;
