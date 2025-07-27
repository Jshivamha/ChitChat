// Routes/User.Route.js
const express = require('express');
const router = express.Router();
const { signUp, signIn, logOut } = require('../controllers/UserController');

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/logout', logOut);


module.exports = router;
