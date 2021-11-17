const express = require('express');

const { createPost, fetchPosts } = require('../controllers/blogPosts');

const router = express.Router();

router.get('/', fetchPosts);
router.post('/', createPost);

module.exports = router;