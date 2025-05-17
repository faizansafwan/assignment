
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Helper function to generate JWT token
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '4d'
    });
};

// @desc    Register a new user
// @route   POST /api/auth/register
const register = async (req, res, next) => {
    try {

        // Validate request fields from express-validator
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ success: false, errors: errors.array() });
        }

        const { name, email, password} = req.body;

        // Manual validation of name, email and password
        if (!name || !email || !password) {
            return res.status(400).json({
              success: false,
              message: 'Name, email, and password are required',
            });
        }
      

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists with this email'
            })
        }

        // create new user
        const user = await User.create({ name, email, password });

        // success message
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


// @desc    Login a user
// @route   POST /api/auth/login
const login = async (req, res, next) => {
    try {

      // validate each fields
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({ success: false, errors: errors.array() });
      }
  
    
      const { email, password } = req.body;
  
    //   find the user by email
      const user = await User.findOne({ email });
      if (!user) { // if user not found, return this message
        return res.status(401).json({
          success: false,
          message: 'Invalid email or password',
        });
      }
  
    //   check whether the requested password is the actual password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: 'Invalid email or password',
        });
      }
  
    //   generate the session token for the id
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


// @desc    Get current logged-in user
// @route   GET /api/auth/me
// @access  Private
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
  