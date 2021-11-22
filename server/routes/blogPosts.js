const express = require('express');

const { createPost, fetchPosts, bookmarkPost, likePost, fetchPost, commentPost } = require('../controllers/blogPosts');

const router = express.Router();
const auth = require('../middleware/authentication')

router.get('/', auth, fetchPosts);
router.get('/:id', auth, fetchPost);

router.post('/', auth, createPost);
router.post('/:id/comment', commentPost);

router.patch('/:id/bookmark', auth, bookmarkPost);
router.patch('/:id/like', auth, likePost);

module.exports = router;