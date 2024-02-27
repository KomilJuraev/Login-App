const express = require('express');

//controller function
const {login, signup} = require('../controller/userInfoController');

const router = express.Router();

router.post('/login', login)

router.post('/signup', signup);

module.exports = router;