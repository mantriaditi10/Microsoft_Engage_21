const express = require('express');
const router = express.Router();

const { signup, signin } = require('../controllers/user.js');

// Routes starting with url /user/..

//POST Requests
router.post('/signin', signin);
router.post('/signup', signup);

module.exports = router;
