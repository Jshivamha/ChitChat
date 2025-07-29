// Routes/User.Route.js
const express = require('express');
const router = express.Router();
const { signUp, signIn, logOut, fetchAllRegisteredUsers } = require('../controllers/UserController');
// const secureRoutes = require('../Middleware/SecureRoute');


router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/logout', logOut);
router.get('/getalluser', fetchAllRegisteredUsers);

module.exports = router;
