const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { register, login, getLoggedInUser } = require('../controllers/authController');
const auth = require('../middleware/auth');

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
router.post('/register',
    [
        check('name', 'Name is required').notEmpty(),   // Ensure name is provided
        check('email', 'Please include a valid email').isEmail(), // validate whether it is a email
        check('password', 'Password must be atleast 8 characters').isLength({min: 8}) // Ensure password length
    ],
    register
);

/**
 * @route   POST /api/auth/login
 * @desc    Login a user
 * @access  Public
 */ 
router.post('/login',
    [
        check('email', 'Valid email is required').isEmail(), // Ensure valid email
        check('password', 'Password is required').notEmpty() // Ensure password is not empty

    ], 
    login
)

/**
 * @route   GET /api/auth/me
 * @desc    Get current logged-in user
 * @access  Private (Requires JWT)
 */
router.get('/me', auth, getLoggedInUser);

module.exports = router;