const express = require("express");
const router = express.Router();

// get signup from auth.js in the handlers
const {signup, signin} = require("../handlers/auth");

router.post("/signin", signin)
router.post("/signup", signup)

module.exports = router;