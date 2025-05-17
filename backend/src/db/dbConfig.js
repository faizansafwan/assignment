const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const DB_URI = process.env.MONGO_URI;
    console.log('Attempting to connect to MongoDB...');
    
    // connect with mongodb atlas
    await mongoose.connect(DB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000
    });

    console.log('MongoDB Atlas Connected Successfully');
  } catch (err) {
    console.error('Database connection error details:', {
      name: err.name,
      message: err.message,
      code: err.code
    });
    process.exit(1);
  }
};

module.exports = connectDB;