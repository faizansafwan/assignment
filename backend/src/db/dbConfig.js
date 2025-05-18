const mongoose = require('mongoose');

/**
 * Establishes a connection to MongoDB Atlas using Mongoose.
 * Logs appropriate messages for success or failure.
 * Exits the process if the connection fails.
 */
const connectDB = async () => {
  try {
    const DB_URI = process.env.MONGO_URI;
    console.log('Attempting to connect to MongoDB...');
    
    // Connect to MongoDB using Mongoose with specific timeout configurations
    await mongoose.connect(DB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000
    });

    console.log('MongoDB Atlas Connected Successfully');
  } catch (err) {

    // Log error details for debugging
    console.error('Database connection error details:', {
      name: err.name,
      message: err.message,
      code: err.code
    });

    // Terminate the process with failure
    process.exit(1);
  }
};

// Export the connection function for use in server.js
module.exports = connectDB;