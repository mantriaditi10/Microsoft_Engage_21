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
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

module.exports = mongoose.model('BlogPosts', blogPostSchema);