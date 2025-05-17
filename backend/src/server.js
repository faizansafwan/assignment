const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db/dbConfig.js');

const loginRoutes = require('./routes/login.js');
const accountRoutes = require('./routes/account.js');
const userRoutes = require('./routes/user.js');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// Routes
app.use('/api/user', userRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/account', accountRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the backend API' });
});


// Connect to database and start server
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