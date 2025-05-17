const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { register, login, getLoggedInUser } = require('../controllers/authController');
const auth = require('../middleware/auth');

// register route
router.post('/register',
    [
        check('name', 'Name is required').notEmpty(),   // validate whether name is empty
        check('email', 'Please include a valid email').isEmail(), // validate whether it is a email
        check('password', 'Password must be atleast 8 characters').isLength({min: 8}) // validate password
    ],
    register
);

// Login route 
router.post('/login',
    [
        check('email', 'Valid email is required').isEmail(), // validate whether it is a email
        check('password', 'Password is required').notEmpty() // validate whether password is empty
    ], 
    login
)

//get logged in user
router.get('/me', auth, getLoggedInUser);

module.exports = router;