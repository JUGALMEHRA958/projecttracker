const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// const projectRouter = require('./modules/habits/routes'); // Import the habits router
const projectRouter = require("./modules/projects/routes")
const path = require('path');
const app = express();
const {Project} = require("./modules/projects/schema")



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));
app.use(express.static('public'));

// Middleware
app.use(express.json());
app.use( "/projects" , projectRouter)


// Routes
app.get('/', async function (req, res, next) {
  let projectData = await Project.find({isDeleted:false}).sort({createdAt : -1});
  console.log(projectData,"habit data");
  res.render('index', {
    habits :projectData
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
