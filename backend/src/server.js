// Import required modules
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

// Import custom modules
const connectDB = require('./db/dbConfig.js'); 
const userRoutes = require('./routes/user.js');

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Parse URL-encoded data
app.use(express.urlencoded({ extended: true })); 

// All user-related API routes prefixed with /api/user
app.use('/api/user', userRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the backend API' });
});


/**
 * Connects to MongoDB and starts the server.
 * Exits process on error.
 */
const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};

startServer();