
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

/**
 * Generate a JWT token for authentication.
 * @param {String} userId - The MongoDB ObjectId of the user
 * @returns {String} - Signed JWT token
 */
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '4d'
    });
};

/**
 * @desc    Register a new user
 * @route   POST /api/auth/register
 * @access  Public
 */
const register = async (req, res, next) => {
    try {

        // Validate request fields from express-validator middleware
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ success: false, errors: errors.array() });
        }

        const { name, email, password} = req.body;

        // Extra Manual validation of name, email and password
        if (!name || !email || !password) {
            return res.status(400).json({
              success: false,
              message: 'Name, email, and password are required',
            });
        }
      

        // Check if a user already exists with the provided email
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists with this email'
            })
        }

        // create new user
        const user = await User.create({ name, email, password });

        // Respond with basic user info
        res.status(201).json({
            success: true,
            user: {
              id: user._id,
              name: user.name,
              email: user.email
            }
          });

    }
    catch (err) {
        next(err);
    }
}


/**
 * @desc    Log in an existing user
 * @route   POST /api/auth/login
 * @access  Public
 */
const login = async (req, res, next) => {
    try {

      // Validate fields from express-validator middleware
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({ success: false, errors: errors.array() });
      }
    
      const { email, password } = req.body;
  
      // Check if user with the provided email exists
      const user = await User.findOne({ email });
      if (!user) { // if user not found, return this message
        return res.status(401).json({
          success: false,
          message: 'Invalid email or password',
        });
      }
  
      // Compare password with stored hash
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: 'Invalid email or password',
        });
      }
  
      // Generate JWT token
      const token = generateToken(user._id);
  
      res.status(200).json({
        success: true,
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (err) {
      next(err);
    }
};


/**
 * @desc    Get currently logged-in user
 * @route   GET /api/auth/me
 * @access  Private
 */
const getLoggedInUser = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ success: false, message: 'Not authorized' });
  }

  res.status(200).json({
    success: true,
    user: req.user,
  });
};

module.exports = { register, login, getLoggedInUser }
  