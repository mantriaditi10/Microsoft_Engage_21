const express = require('express');

const { createPost } = require('../controllers/blogPosts');

const router = express.Router();

router.post('/', createPost);

module.exports = router;