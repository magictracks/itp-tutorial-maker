const express = require('express');
const router = express.Router({mergeParams: true});
// var db = require("../models");
const {createTutorial, getTutorial, deleteTutorial} = require("../handlers/tutorials");

router.route('/')
 .post(createTutorial)
 
router.route('/:tutorial_id')
  .get(getTutorial)
  .put(deleteTutorial)
  
module.exports = router;