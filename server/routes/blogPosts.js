const express = require('express');

const { createPost, fetchPosts, bookmarkPost, likePost } = require('../controllers/blogPosts');

const router = express.Router();
const auth = require('../middleware/authentication')

router.get('/', auth, fetchPosts);
router.post('/', auth, createPost);

router.patch('/:id/bookmark', auth, bookmarkPost);
router.patch('/:id/like', auth, likePost);

module.exports = router;