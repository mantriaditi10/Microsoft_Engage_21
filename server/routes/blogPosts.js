const express = require('express');

const { createPost, fetchPosts, bookmarkPost } = require('../controllers/blogPosts');

const router = express.Router();

router.get('/', fetchPosts);
router.post('/', createPost);

router.patch('/:id/bookmark', bookmarkPost);

module.exports = router;