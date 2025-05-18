const User = require('../models/user');
const jwt = require('jsonwebtoken');

/**
 * Middleware to verify JWT and attach the authenticated user to the request object.
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Callback to pass control to the next middleware
 * 
 * @returns {Object} 401 Unauthorized response if the token is missing or invalid
 */
module.exports = async (req, res, next) => {

  // Extract the token from the Authorization header
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    // Return unauthorized response if token is not provided
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    // Verify the token using the secret stored in environment variables
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Retrieve the user by ID from the decoded token payload
    // Exclude the password field when attaching the user to the request object
    req.user = await User.findById(decoded.id).select('-password');

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {

    // Return unauthorized response if the token is invalid or expired
    res.status(401).json({ message: 'Invalid token' });
  }
};
