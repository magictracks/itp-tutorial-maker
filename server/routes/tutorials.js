var express = require('express');
var router = express.Router();
var db = require("../models");
var handlers = require("../handlers/tutorials");

router.route('/')
 .get(handlers.getTutorials)
 .post(handlers.createTutorial)
 
router.route('/id/:tutorialId')
  .get(handlers.getTutorial)
  .put(handlers.updateTutorial)
  
module.exports = router;