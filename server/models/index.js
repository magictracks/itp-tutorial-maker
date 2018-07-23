var mongoose = require('mongoose');
mongoose.set('debug', true);
require('mongoose-type-url');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/itp-tutorial-maker', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
});

// User routes
module.exports.User = require("./user");

// routes for tutorials, resources, and sections
module.exports.Tutorial = require("./tutorial");
module.exports.Section = require("./section");
module.exports.Resource = require("./resource");
