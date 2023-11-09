// Import required modules
const express = require('express');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Import routes
const userRoutes = require('./routes/user');

// Use routes
app.use('/user', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// Export the app
module.exports = app;
