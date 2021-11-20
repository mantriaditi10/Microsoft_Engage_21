const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
  title: String,
  message: String,
  category: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  bookmarks: {
    type: [String],
    default: []
  }
});

module.exports = mongoose.model('BlogPosts', blogPostSchema);