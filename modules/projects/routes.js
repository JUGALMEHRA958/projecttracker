const express = require('express');
const router = express.Router();

const {addIt,getBugs} = require("./controller");
const { Bug } = require('./schema');


router.post('/add', addIt);


// router.post('/getBugPage', getBugs);
    

router.get("/bugspage/:id", async (req, res) => {
    console.log("router page 14");
    console.log(req.params.id,"this id receive");
    let bugs= await Bug.find({projectId : req.params.id})
    res.render("bugspage", { bugs });
  });
  






module.exports = router;