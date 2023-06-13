const express = require('express');
const router = express.Router();
const { addIt ,editHabit} = require("./controller"); 
const { checkAdding , editValidator } = require("./validator"); 


// Import the addIt function correctly
// Define routes using the router object
router.post('/add', checkAdding,addIt);
router.post('/edit', editValidator,editHabit);


// Export the router
module.exports = router;
