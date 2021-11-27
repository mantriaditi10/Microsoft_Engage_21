const mongoose = require('mongoose');

// Database Schema for a single USER

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  id: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema);