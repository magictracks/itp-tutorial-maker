var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/tutorials");

router.route('/')
 .get(helpers.getTutorials)
 .post(helpers.createTutorial)
 
router.route('/id/:tutorialId')
  .get(helpers.getTutorial)
  .put(helpers.updateTutorial)
  
module.exports = router;