const express = require('express');
const router = express.Router();

// Define routes using the router object
router.get('', function (req, res, next) {
  res.send('Habits route');
});

// Export the router
module.exports = router;
