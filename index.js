const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const habitsRouter = require('./modules/habits/routes'); // Import the habits router

const app = express();

// Middleware
app.use(express.json());
app.use( "/habits" , habitsRouter)

// Routes
app.get('/api', function (req, res, next) {
  res.send('hello world');
});

// MongoDB Connection
const uri = process.env.dbUrl;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
    const port = process.env.serverPort || 4000;

    // Start the server after successful MongoDB connection
    const server = app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });

    // Export the app and server objects
    module.exports = { app, server };
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
