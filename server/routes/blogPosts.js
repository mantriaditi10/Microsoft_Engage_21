const express = require('express');

const { createPost, fetchPosts, bookmarkPost, likePost, fetchPost, commentPost } = require('../controllers/blogPosts');

const router = express.Router();
const auth = require('../middleware/authentication')

// Routes starting with url /blogs/..

//GET Requests
router.get('/', auth, fetchPosts);
router.get('/:id', auth, fetchPost);

//POST Requests
router.post('/', auth, createPost);
router.post('/:id/comment', auth, commentPost);

//PATCH Requests
router.patch('/:id/bookmark', auth, bookmarkPost);
router.patch('/:id/like', auth, likePost);

module.exports = router;