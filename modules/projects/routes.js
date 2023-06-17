const express = require('express');
const router = express.Router();

const {addIt,addBug} = require("./controller");
const { Bug } = require('./schema');


router.post('/add', addIt);
router.post('/addBug', addBug);


   
router.get(`/bugsPage/:id`, async function (req, res, next) {
  // console.log(req.body.data.bugs,"req.body.data.bugs")
  // console.log("receive in param", req.params.id);
  let bugs=await Bug.find({projectId:req.params.id})
  res.render('bugspage', {bugs:bugs});
});


  






module.exports = router;