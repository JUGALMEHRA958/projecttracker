const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const habitsRouter = require('./modules/habits/routes'); // Import the habits router
const path = require('path');
const app = express();
const {HabitTracker} = require("./modules/habits/schema")



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use( "/habits" , habitsRouter)


// Routes
app.get('/', async function (req, res, next) {
  let habitData = await HabitTracker.find({isDeleted:false}).sort({createdAt : -1})
  res.render('index', {
    habits :habitData
  });
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
